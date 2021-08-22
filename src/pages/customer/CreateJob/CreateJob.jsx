/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { Button, Grid, Icon } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import FormGroup from '../../../components/form-group/form-group';
import DimensionInputGroup from '../../../components/dimension-input-group/input-group';
import Divider from '../../../components/AppDivider/AppDivider';
import AddItem from '../../../components/add-item/add-item';
import CompanyDirectory from '../../../components/floating-company-directory/floating-company-directory';
import getDimensionInFeet from '../../../utils/dimension';
import amountToText from '../../../utils/app';
import AppContentWrapper from '../../../components/app-content-wrapper/app-content-wrapper';
import Help from '../../../components/HelpWrapper/HelpWrapper';
import HelpContent from '../../../utils/help/JobActions';
import { addJobAsDraft, addNewJob, removeJobFromDrafts, saveCurrentJobProgress } from '../../../redux/slices/job';
import samplePaperTypes from '../../../app/mockdata/papertype';
import CommonSizes from '../../../app/mockdata/commonsizes';
import sampleUnits from '../../../app/mockdata/units';
import { ReactComponent as ForwardArrow } from '../../../svg/forward-arrow.svg';
import SelectCompany from '../../../components/SelectCompany/SelectCompany';
import ShowCompanyDetails from '../../../components/ShowCompanyDetails/ShowCompanyDetails';
import ViewJobDrafts from '../../../components/ViewJobDrafts/ViewJobDrafts';
import { uuid } from 'uuidv4';
import {uniqueId} from "lodash"
import FileReader from '../../../utils/FileReader';
import PreviewJobs from '../../../components/PreviewJobs/PreviewJobs';
import FileThumbnail from '../../../components/FileThumbnail/FileThumbnail';

class CreateJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        canShowCompanyDirectory: false,
        canCreateJob: false,
        canViewSavedJobs: false,
        shouldDiscardFile: false,
      },
      tenant: {
        name: 'Best Starts Print Limited',
        address: {
          location: 'Kokomlemle',
        },
        currency: {
          name: 'Ghana cedis',
          symbol: 'GHC',
        },
      },
      paperTypes: samplePaperTypes,
      paperSizes: CommonSizes,
      units: sampleUnits,
      allJobs: [],
      job: null,
      paymentOrder: {
        reference: '',
        status: '',
        transaction: '',
        message: '',
        amount: null,
      },
    };
    this.ref = React.createRef();
  }

  getFileFromBlob = async (url) => {
    const base64 = await fetch(url);
    const blob = await base64.blob();
    const url2 = URL.createObjectURL(blob)
    this.setState((state) => ({
      ...state,
      temp: url2
    }))
  }

  componentDidMount() {
    const reader = new FileReader();
    reader.readFile()

    const { currentJob, jobDrafts } = this.props;
    if (currentJob) {
      this.setState((state) => ({
        ...state,
        job: { ...currentJob },
      }));
    } else {
      this.setState((state) => ({
        ...state,
        job: {
          ...this.defaultJob()
        }
      }))
    }

    if (currentJob && currentJob.company) {
      this.setState((state) => ({
        ...state,
        options: {
          ...state.options,
          canCreateJob: true,
        },
      }));
    }

    if (jobDrafts) {
      this.setState((state) => ({
        ...state,
        allJobs: [...jobDrafts],
      }));
    }
  }
  componentDidUpdate(prevProps) {
    // if (this.state.job && prevProps.currentJob) {
    //   if (this.state.job.uuid !== this.props.currentJob.uuid) {
    //     this.setState((state) => ({
    //       ...state,
    //       job: {...this.props.currentJob},
    //     }))
    //   }
    // }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  defaultJob = () => ({
    uuid: uuid(),
    totalCost: 0.0,
    title: '',
    width: '',
    height: '',
    quantity: '',
    comment: '',
    company: null,
    selectedPaper: null,
    paperSizeType: 'default', // or custom
    unit: null,
    file: null,
    fileDataUrl: "",
    laminated: false,
  })
  
  sayHello = () => {
    const { saveJobProgress } = this.props;
    const { job } = this.state;
    this.interval = setInterval(() => {
      saveJobProgress(job);
    }, 3000);
  }

  /**
   * Compute the cost of job based on the dimensions on the paper selected
   * and the unit cost of the paper.
  */
  computeCost = () => {
    const { job } = this.state;
    const {
      width, height, quantity, selectedPaper, paperSizeType, unit,
    } = job;
    const newJob = job;
    if (paperSizeType === 'default' && selectedPaper) {
      const selectedSize = selectedPaper.defaultSizes
        .find((s) => s.name === width && s.name === height);

      if (selectedSize) {
        const { unitCost } = selectedSize;
        newJob.totalCost = (unitCost * quantity);
      }
    } else if (paperSizeType === 'custom') {
      if (width !== '' && height !== '' && unit != null && quantity !== '') {
        const cost = getDimensionInFeet(unit.symbol, width, height) * selectedPaper.unitPrice;
        const totalCost = cost * quantity;
        // newJob.totalCost = amountToText(totalCost.toFixed(2));
        newJob.totalCost = totalCost;
      }
    }

    this.setState((state) => ({
      ...state,
      job: newJob,
    }));
    const { saveJobProgress } = this.props;
    saveJobProgress(newJob);
  };

  handlePaperSelectionChange = (e, data) => {
    const { value } = data;
    const { paperTypes } = this.state;
    const selectedPaper = paperTypes.find((f) => f.id === value);
    this.setState((state) => ({
      ...state,
      job: {
        ...state.job,
        selectedPaper,
      },
    }), () => { this.computeCost(); });
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { job } = this.state;
    job[name] = value;
    this.setState((state) => ({
      ...state,
      job,
    }), () => this.computeCost());
  };

  handleCommentChange = (data) => {
    const { job } = this.state;
    job.comment = data;
    this.setState((state) => ({
      ...state,
      job,
    }));
  }

  handleJobCompanyChange = (newCompany) => {
    const updatedJob = {
      ...this.state.job,
      company: newCompany,
    };
    this.setState((state) => ({
      ...state,
      job: {
        ...updatedJob,
      },
    }));

    const { saveJobProgress } = this.props;
    saveJobProgress(updatedJob);
  }

  // check when the units of measurement change or
  // when the default paper size changes.
  handleDimensionUnitChange = (data) => {
    const { units, job } = this.state;
    const { paperSizeType } = job;
    if (paperSizeType === 'default') {
      const updatedJob = {
        ...job,
        width: data,
        height: data,
      };
      this.setState((state) => ({
        ...state,
        job: updatedJob,
      }));
    } else if (paperSizeType === 'custom') {
      const selectedOption = units.find((u) => u.id === data);
      this.setState((state) => ({
        ...state,
        job: {
          ...state.job,
          unit: selectedOption,
        },
      }), () => this.computeCost());
    }
  }

  handlePaperSizeTypeChange = (e, data) => {
    const { value } = data;
    this.setState((state) => ({
      ...state,
      job: {
        ...state.job,
        paperSizeType: value,
      },
    }));
  };

  transformUnits = () => {
    const { units } = this.state;
    return units.map((u) => ({ key: u.id, text: u.name, value: u.id }));
  }

  clearAllFields = () => {
    this.setState((state) => ({
      ...state,
      job: {
        ...this.defaultJob()
      },
    }));
  };

  addJob = () => {
    const { job } = this.state;
    const { addNewJobAsDraft } = this.props;
    this.setState((state) => ({
      ...state,
      allJobs: [...state.allJobs, job],
      job: {...this.defaultJob()}
    }));

    addNewJobAsDraft(job);
    this.clearAllFields();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { job } = this.state;
    const { saveJobProgress } = this.props;
    saveJobProgress(job);
    const { history } = this.props;
    history.push('/job/checkout');
  };

  toggleCompanyDirectoryForm = (value) => {
    this.setState((state) => ({
      ...state,
      options: {
        ...state.options,
        canShowCompanyDirectory: value,
      },
    }));
  };

  handleContinueJobSettings = () => {
    this.setState((state) => ({
      ...state,
      options: {
        ...state.options,
        canCreateJob: true,
      },
    }));
  };

  logFile = (file) => {
    console.log("File", file)
  }
  
  handleFileChange = async (file) => {
    const reader = new FileReader();    
    if (file.length > 0) {
      reader.readFileAsDataURL(file, (results) => {
        this.setState((state) => ({
          ...state,
          job: {
            ...state.job, 
            file: results,
          }
        }), () => {this.props.saveJobProgress(this.state.job);})
      })
    }
  }

  /**
   * Set the job for editing and move the current job to draft
   * @param {*} jobID The ID of the job to edit
  */
  setJobDraftForEditing = (jobUUID) => {
    const { currentJob, jobDrafts, removeJobFromDrafts, saveJobProgress, addNewJobAsDraft } = this.props;
    const job = jobDrafts.find((job) => job.uuid === jobUUID);
    // set the job being edited as the current job from redux
    saveJobProgress(job)

    // remove job from drafts from redux
    removeJobFromDrafts(jobUUID)

    // save current job as a draft from redux
    addNewJobAsDraft(currentJob);

    this.setState((state) => ({
      ...state,
      options: {
        ...state.options,
        shouldDiscardFile: false,
      },
      job: {...job},
    }))
  }

  // This is only applicable when the user selects default paper sizes
  getDefaultPaperSize = () => {
    const { job } = this.state;
    const { selectedPaper, paperSizeType, height } = job || {}

    if (selectedPaper) {
      const { defaultSizes } = selectedPaper;
      if (paperSizeType === 'default') {
        const paperSize = defaultSizes.find((s) => s.name === height);
        if (paperSize) {
          return paperSize.name;
        }
      }
    }
    return null;
  }

  handleDiscardFile = () => {
    this.setState((state) => ({
      ...state,
      options: {
        ...state.options,
        shouldDiscardFile: true
      }
    }))
  }

  render() {
    const {
      options: { canShowCompanyDirectory, canCreateJob },
      allJobs, paperTypes, ref, job,
    } = this.state;

    const { quantity,title, width, height, comment, totalCost, selectedPaper, paperSizeType, company, unit,} = job || {}

    return (
	<div>
		{!canCreateJob && (
			<SelectCompany
				setCompany={this.handleJobCompanyChange}
				handleAction={this.handleContinueJobSettings}
			/>
		)}
		{canCreateJob && (
			<AppMainContent
				hasAside
				aside={<Help helps={HelpContent} classes="p-l-15 p-r-15" />}
				parentClasses="app-pad opaque background"
			>
				<AppContentWrapper
					heading="New Job"
				>
					<div className="p-l-10 p-l-10">
						<Divider type="thick" title="Company" />
						<div className="m-t-20">
							<ShowCompanyDetails company={company} />
							<div className="flex center space-out m-t-20">
								<div>Open company directory to select company</div>
								<Button
									content="Select new company"
									onClick={() => this.toggleCompanyDirectoryForm(true)}
									className="transparent app-primary"
								/>
							</div>
							{canShowCompanyDirectory && (
								<CompanyDirectory
									handleCloseAction={() => this.toggleCompanyDirectoryForm(false)}
									handleAction={(value) => this.handleJobCompanyChange(value)}
								/>
							)}
						</div>
					</div>
					<Divider
						type="thick"
						title="Job Details"
						classes="m-t-40"
					/>
					<ValidatorForm
						ref={ref}
						onSubmit={() => {}}
					>
						<div className="m-b-20 m-t-20">
							<FormGroup
								center
								type="text"
								label="Job Title *"
								value={title}
								name="title"
								onChange={this.handleInputChange}
								placeholder="Enter Job Title"
								validators={['required', 'minStringLength: 8']}
								errorMessages={['Job Title is required', 'Title is too short']}
								instantValidate
							/>
						</div>
						<div className="m-b-20 m-t-20">
							<FormGroup
								center
								type="dropdown-validator"
								label="Job Type *"
								placeholder="Select job type"
								options={paperTypes.map((p) => ({ key: p.id, text: `${p.name} (${p.commonName})`, value: p.id }))}
								onChange={this.handlePaperSelectionChange}
								instantValidate
								validators={['required']}
								errorMessages={['Job Type is required']}
								value={selectedPaper && selectedPaper.id}
							/>
						</div>
						<div className="m-b-20">
							<DimensionInputGroup
								classes=""
								inline
								placeholder1="Width"
								placeholder2="Height"
								label="Size *"
								name1="width"
								name2="height"
								value1={width}
								value2={height}
								labelName="size"
								unitsValue={unit && unit.id}
								selectedPaper={selectedPaper}
								paperSizeType={paperSizeType}
								paperSizeValue={this.getDefaultPaperSize()}
								options={this.transformUnits()}
								onChange={this.handleInputChange}
								handlePaperSizeTypeChange={this.handlePaperSizeTypeChange}
								handleDropDownChange={this.handleDimensionUnitChange}
							/>
						</div>
						<div className="m-b-20">
							<FormGroup
								classes="small"
								center
								type="text"
								label="Quantity *"
								name="quantity"
								value={quantity}
								placeholder="How many pieces do you want?"
								onChange={this.handleInputChange}
								instantValidate
								validators={['required']}
								errorMessages={['Quantity is required']}
							/>
						</div>
						<div className="m-b-20">
							<FormGroup
								classes="small"
								center
								type="amount"
								amountLabel="GHC"
								label="Cost"
								name="totalCost"
								placeholder="Cost of Job"
								value={totalCost}
							/>
						</div>
            {this.state.job.file && this.state.options.shouldDiscardFile && (
              <div className="m-b-20">
                <FormGroup
                  classes="fluid"
                  center
                  type="dropzone"
                  label="File *"
                  placeholder="Add file to be printed"
                  handleFileChange={this.handleFileChange}
                  multiple={false}
                  singleUpload
                />
              </div>
            )}
            {this.state.job.file && !this.state.options.shouldDiscardFile && (
              <div className="m-t-20">
                <FormGroup
                  label="File *"
                  classes="small"
                >
                  <FileThumbnail 
                    fileURL={this.state.job.file}
                    handleDiscardFile={this.handleDiscardFile}
                  />
                </FormGroup>
              </div>
            )}
						<div className="m-b-20">
							<FormGroup
								center
								type="textarea"
								label="Special comments"
								placeholder="Special comments"
								rows={3}
								cols={73}
								value={comment}
								name="comment"
								onChange={this.handleCommentChange}
							/>
						</div>
            <div className="m-t-40 text-right flex center w-full reverse">
              <span className="m-r-10 m-l-20">
                <AddItem
                  title="Add another job"
                  classes="app-primary text-right m-t-20 m-b-20"
                  iconClasses="small icon m-r-5"
                  // parentClasses="text-right"
                  handleClick={this.addJob}
                />
              </span>
              <span>
                <Button
                  className="transparent clickable bold sm-caption"
                  size="medium"
                  type="button"
                  onClick={() => this.setState({
                    ...this.state, options: {...this.state.options, 
                      canViewSavedJobs: !this.state.options.canViewSavedJobs
                  }})}
                >
                  <Icon name="save" />
                  {this.state.options.canViewSavedJobs ? "Hide saved jobs" : "View saved jobs"}
                </Button>
              </span>
            </div>
            <div className="w-full">
              <Divider type="thick" title={`Summary - ${allJobs.length} saved ${allJobs.length === 1 ? "job" : "jobs"}`} />
              {this.state.options.canViewSavedJobs && (
                <div className="m-t-10">
                  <ViewJobDrafts jobs={this.props.jobDrafts} setJobForEditing={this.setJobDraftForEditing} />
                </div>
              )}
            </div>
						<div className="m-t-40 text-right inline center">
							<Link to="/jobs">
								<Button
									default
									size="small"
									content="Cancel"
								/>
							</Link>
              <Button
                default
                content="Clear fields" 
                onClick={this.clearAllFields}
              />
							<Button
								as="submit"
								size="small"
								content={(
									<span className="flex-inline">
										<span>Continue</span>
										<ForwardArrow className="icon icon-12 m-l-5" />
									</span>
								)}
								positive
								className="flex center"
								onClick={this.handleSubmit}
							/>
						</div>
					</ValidatorForm>         
				</AppContentWrapper>
			</AppMainContent>
		)}
	</div>
    );
  }
}

const mapStateToProps = (state) => ({
  jobDrafts: state.job.jobDrafts,
  currentJob: state.job.currentJob,
});

const mapDispatchToProps = (dispatch) => ({
  addNewJobAsDraft: (job) => dispatch(addJobAsDraft(job)),
  saveJobProgress: (job) => dispatch(saveCurrentJobProgress(job)),
  removeJobFromDrafts: (jobID) => dispatch(removeJobFromDrafts(jobID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateJob));
