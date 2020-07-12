/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { Button } from 'semantic-ui-react';
import Layout from '../../../components/layout/layout';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import FormGroup from '../../../components/form-group/form-group';
import DimensionInputGroup from '../../../components/dimension-input-group/input-group';
import Divider from '../../../components/divider/divider';
import AddItem from '../../../components/add-item/add-item';
import CompanyDirectory from '../../../components/company-directory/company-directory';
import getDimensionInFeet from '../../../utils/dimension';
import amountToText from '../../../utils/app';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        canShowCompanyDirectory: true,
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
      paperTypes: [
        {
          id: 1,
          name: 'SAV',
          commonName: 'Sticker',
          unitPrice: 1.0,
        },
        {
          id: 2,
          name: 'FLEXI',
          commonName: 'Banner',
          unitPrice: 1.3,
        },
        {
          id: 3,
          name: 'PAPER',
          commonName: 'Blue back',
          unitPrice: 1.2,
        },
      ],
      units: [
        {
          id: 1,
          name: 'Feet',
          symbol: 'ft',
        },
        {
          id: 2,
          name: 'Centimeters',
          symbol: 'cm',
        },
        {
          id: 3,
          name: 'Inches',
          symbol: 'inc',
        },
      ],
      unit: null,
      allJobs: [],
      selectedPaper: null,
      selectedUnit: null,
      job: {
        totalCost: 0.0,
        title: '',
        width: '',
        height: '',
        quantity: '',
        comment: '',
      },
    };
    this.ref = React.createRef();
  }

  computeCost = () => {
    const { unit, job } = this.state;
    const { width, height, quantity } = job;
    const newJob = job;
    if (width !== '' && height !== '' && unit != null && quantity !== '') {
      const cost = getDimensionInFeet(unit.symbol, width, height) * quantity;
      newJob.totalCost = amountToText(cost.toFixed(2));
      this.setState((state) => ({
        ...state,
        job: newJob,
      }));
    }
  };

  handlePaperSelectionChange = (data) => {
    const { paperTypes } = this.state;
    const selectedPaper = paperTypes.find((f) => f.id === data);
    this.setState((state) => ({
      ...state,
      selectedPaper,
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

  handleDimensionUnitChange = (data) => {
    const { units } = this.state;
    const selectedOption = units.find((u) => u.id === data);
    this.setState((state) => ({
      ...state,
      unit: selectedOption,
    }), () => this.computeCost());
  }

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
    history.push('/checkout');
  };

  toggleCompanyDirectoryForm = () => {
    console.log('We want to toggle the action');
    const { options: { canShowCompanyDirectory } } = this.state;
    this.setState((state) => ({
      ...state,
      options: {
        ...state.options,
        canShowCompanyDirectory: !canShowCompanyDirectory,
      },
    }));
  };

  render() {
    const {
      options: { canShowCompanyDirectory },
      allJobs, paperTypes, ref, job: {
        quantity, title, width, height, comment, totalCost,
      },
    } = this.state;

    return (
	<div>
		<Layout>
			<AppMainContent
				heading="New Job"
			>
				<ValidatorForm
					ref={ref}
					onSubmit={() => {}}
				>
					{canShowCompanyDirectory && (
						<div className="">
							<Divider type="faint" title="Company" />
							<div className="m-t-20">
								Open Company directory to select a company
								<CompanyDirectory
									handleCloseAction={this.toggleCompanyDirectoryForm}
								/>
							</div>
						</div>
					)}
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
							options={this.transformUnits()}
							onChange={this.handleInputChange}
							handleDropDownChange={this.handleDimensionUnitChange}
						/>
					</div>
					<div className="m-b-20 m-t-20">
						<FormGroup
							center
							type="dropdown"
							label="Job Type"
							placeholder="Select job type"
							options={paperTypes.map((p) => ({ key: p.id, text: `${p.name} (${p.commonName})`, value: p.id }))}
							onChange={(data) => this.handlePaperSelectionChange(data)}
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
			</AppMainContent>
		</Layout>
	</div>
    );
  }
}

export default Home;
