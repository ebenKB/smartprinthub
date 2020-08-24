/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { Button } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import FormGroup from '../../../components/form-group/form-group';
import DimensionInputGroup from '../../../components/dimension-input-group/input-group';
import Divider from '../../../components/divider/divider';
import AddItem from '../../../components/add-item/add-item';
import CompanyDirectory from '../../../components/floating-company-directory/floating-company-directory';
import getDimensionInFeet from '../../../utils/dimension';
import amountToText from '../../../utils/app';
import AppContentWrapper from '../../../components/app-content-wrapper/app-content-wrapper';
import Help from '../../../components/Help/help';
import { addJobAsDraft, saveCurrentJobProgress, selectCurrentJob } from '../../../redux/slices/job';
import samplePaperTypes from '../../../app/mockdata/papertype';
// import samplePaperSizes from '../../../app/mockdata/paperSizes';
import CommonSizes from '../../../app/mockdata/commonsizes';
import sampleUnits from '../../../app/mockdata/units';
import { ReactComponent as ForwardArrow } from '../../../svg/forward-arrow.svg';
import SelectCompany from '../../../components/SelectCompany/SelectCompany';
import ShowCompanyDetails from '../../../components/ShowCompanyDetails/ShowCompanyDetails';
import DropdownValidator from '../../../components/form-fields/dropdown-validator/dropdown-validator';


class CreateJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        canShowCompanyDirectory: false,
        canCreateJob: false,
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
      job: {
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
        laminated: false,
      },
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    const { currentJob, jobDrafts } = this.props;
    if (currentJob) {
      this.setState((state) => ({
        ...state,
        job: { ...currentJob },
      }));
    }

    if (jobDrafts) {
      this.setState((state) => ({
        ...state,
        allJobs: [...jobDrafts],
      }));
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('The component will unmount', this.interval);
  }

  sayHello = () => {
    const { saveJobProgress } = this.props;
    const { job } = this.state;
    console.log('We can say hello', job);
    this.interval = setInterval(() => {
      console.log('Time is running');
      saveJobProgress(job);
    }, 3000);
  }

  // componentDidUpdate(prevProps) {
  //   console.log('The component has updated', prevProps);
  //   // Check if the user has any saved jobs and restore them
  //   const { currentJob } = prevProps;
  //   const { job } = this.state;
  //   // eslint-disable-next-line react/destructuring-assignment
  //   if (currentJob !== job) {
  //     console.log('The are not equal');
  //     // const { saveJobProgress } = this.props;
  //     // saveJobProgress(job);
  //   } else {
  //     console.log('They are equal');
  //   }
  // }

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
        const cost = getDimensionInFeet(unit.symbol, width, height) * quantity;
        newJob.totalCost = amountToText(cost.toFixed(2));
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
    console.log('This is the detials of the company', newCompany);
    const updatedJob = {
      ...this.state.job,
      company: newCompany,
    };
    this.setState((state) => ({
      ...state,
      job: {
        // ...state.job,
        // company: newCompany,
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
        title: null,
        width: null,
        height: null,
        quantity: '',
        comment: null,
      },
    }));
  };

  addJob = () => {
    const { job } = this.state;
    const { addNewJobAsDraft } = this.props;
    this.setState((state) => ({
      ...state,
      allJobs: [...state.allJobs, job],
    }));

    addNewJobAsDraft(job);
    this.clearAllFields();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const { addNewJobAsDraft } = this.props;
    const { job } = this.state;
    // addNewJobAsDraft(job);
    const { saveJobProgress } = this.props;
    saveJobProgress(job);
    const { history } = this.props;
    history.push('/job/checkout');
  };

  toggleCompanyDirectoryForm = (value) => {
    // const { options: { canShowCompanyDirectory } } = this.state;
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

  // This is only application when the user selects default paper sizes
  getDefaultPaperSize = () => {
    const { job: { selectedPaper, paperSizeType, height } } = this.state;
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

  render() {
    const {
      options: { canShowCompanyDirectory, canCreateJob },
      allJobs, paperTypes, ref, job: {
        quantity,
        title, width, height, comment, totalCost, selectedPaper, paperSizeType, company, unit,
      },
    } = this.state;

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
				aside={<Help />}
			>
				<AppContentWrapper
					heading="New Job"
				>
					<ValidatorForm
						ref={ref}
						onSubmit={() => {}}
					>
						<div className="">
							<Divider type="thick" title="Company" />
							<div className="m-t-20">
								<ShowCompanyDetails company={company} />
								<div className="flex center space-out m-t-20">
									<div>Open company directory to select company</div>
									<Button
										content="Open company directory"
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
						<div className="m-b-20">
							<FormGroup
								classes="small"
								center
								type="dropzone"
								label="File *"
								placeholder="Add file to be printed"
							/>
						</div>
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
						<div className="m-t-20 m-b-20">
							<Divider type="thick" title="Summary" />
							<div className="m-t-10">
								Job Drafts:
								{allJobs.length}
							</div>
						</div>
						<AddItem
							title="Add new job"
							classes="app-primary text-right m-t-20 m-b-20"
							iconClasses="small icon m-r-5"
							parentClasses="text-right"
							handleClick={this.addJob}
						/>
						<div className="m-t-40 text-right inline center">
							<Link to="/jobs">
								<Button
									default
									size="small"
									content="Cancel"
								/>
							</Link>
							<Button
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
  // currentJob: selectCurrentJob(state),
  currentJob: state.job.currentJob,
});

const mapDispatchToProps = (dispatch) => ({
  addNewJobAsDraft: (job) => dispatch(addJobAsDraft(job)),
  saveJobProgress: (job) => dispatch(saveCurrentJobProgress(job)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateJob));
