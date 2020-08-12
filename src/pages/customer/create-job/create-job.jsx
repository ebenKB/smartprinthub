/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import FormGroup from '../../../components/form-group/form-group';
import DimensionInputGroup from '../../../components/dimension-input-group/input-group';
import Divider from '../../../components/divider/divider';
import AddItem from '../../../components/add-item/add-item';
import CompanyDirectory from '../../../components/company-directory/company-directory';
import getDimensionInFeet from '../../../utils/dimension';
import amountToText from '../../../utils/app';
import AppContentWrapper from '../../../components/app-content-wrapper/app-content-wrapper';
import Help from '../../../components/Help/help';
import { addJobAsDraft } from '../../../redux/slices/job';
import samplePaperTypes from '../../../app/mockdata/papertype';
import samplePaperSizes from '../../../app/mockdata/paperSizes';
import sampleUnits from '../../../app/mockdata/units';

class CreateJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        canShowCompanyDirectory: false,
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
      paperSizes: samplePaperSizes,
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
      },
    };
    this.ref = React.createRef();
  }

  /**
   * Compute the cost of job based on the dimensions on the paper selected
   * and the unit cost of the paper.
   */
  computeCost = () => {
    const {
      unit, job,
    } = this.state;
    const {
      width, height, quantity, selectedPaper, paperSizeType,
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

  // check when the units of measurement change or
  // when the default paper size changes.
  handleDimensionUnitChange = (data) => {
    const { units, paperSizeType, job } = this.state;
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
        unit: selectedOption,
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
    this.setState((state) => ({
      ...state,
      allJobs: [...state.allJobs, state.job],
    }));

    this.clearAllFields();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('We want to submit');
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

  render() {
    const {
      options: { canShowCompanyDirectory },
      allJobs, paperTypes, ref, job: {
        quantity, title, width, height, comment, totalCost, selectedPaper, paperSizeType,
      },
    } = this.state;

    const { jobDratfs, addNewJobAsDraft } = this.props;

    return (
	<div>
		{/* <Layout> */}

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
						<Divider type="faint" title="Company" />
						<div className="m-t-20">
							<Button
								content="Open company directory"
								onClick={() => this.toggleCompanyDirectoryForm(true)}
								className="transparent app-primary"
							/>
							to select a company
							{canShowCompanyDirectory && (
								<CompanyDirectory
									handleCloseAction={() => this.toggleCompanyDirectoryForm(false)}
								/>
							)}
						</div>
					</div>
					<Divider
						type="faint"
						title={`Job Details ${allJobs && allJobs.length > 0 && allJobs.length}`}
						classes="m-t-40"
					/>
					<div className="m-b-20 m-t-20">
						<FormGroup
							center
							type="text"
							label="Job Title"
							value={title}
							name="title"
							onChange={this.handleInputChange}
							placeholder="Enter Job Title"
						/>
					</div>
					<div className="m-b-20 m-t-20">
						<FormGroup
							center
							type="dropdown"
							label="Job Type"
							placeholder="Select job type"
							options={paperTypes.map((p) => ({ key: p.id, text: `${p.name} (${p.commonName})`, value: p.id }))}
							onChange={this.handlePaperSelectionChange}
						/>
					</div>
					<div className="m-b-20">
						<DimensionInputGroup
							classes="smallx"
							inline
							placeholder1="Width"
							placeholder2="Height"
							label="Size"
							name1="width"
							name2="height"
							value1={width}
							value2={height}
							labelName="size"
							selectedPaper={selectedPaper}
							paperSizeType={paperSizeType}
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
							label="Quantity"
							name="quantity"
							value={quantity}
							placeholder="How many pieces do you want?"
							onChange={this.handleInputChange}
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
							label="File"
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
						<Divider type="faint" title="Summary" />
						<div className="m-t-10">
							Job Drafts:
							{allJobs.length}
						</div>
					</div>
					<h1>
						Job drafts are Here
						{jobDratfs && jobDratfs.length}
					</h1>
					<button type="button" onClick={() => addNewJobAsDraft({ name: 'Creator', cost: 100 })}>Add job</button>
					<AddItem
						title="Add new job"
						classes="app-primary text-right m-t-20 m-b-20"
						iconClasses="small icon m-r-5"
						parentClasses="text-right"
						handleClick={this.addJob}
					/>
					<div className="m-t-40 text-right inline center">
						<Button
							default
							size="small"
							content="Save as Draft"
						/>
						<Button
							positive
							size="small"
							content="Continue"
							onClick={this.handleSubmit}
						/>
					</div>
				</ValidatorForm>
			</AppContentWrapper>
		</AppMainContent>
		{/* </Layout> */}
	</div>
    );
  }
}

const mapStateToProps = (state) => ({
  jobDratfs: state.job.jobDrafts,
});

const mapDispatchToProps = (dispatch) => ({
  addNewJobAsDraft: (job) => dispatch(addJobAsDraft(job)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateJob));
