import React, { Component } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { Button } from 'semantic-ui-react';
import Layout from '../../components/layout/layout';
import AppMainContent from '../../components/app-main-content/app-main-content';
import FormGroup from '../../components/form-group/form-group';
import InputGroup from '../../components/form-input-group/input-group';
import Divider from '../../components/divider/divider';
import AddItem from '../../components/add-item/add-item';
import CompanyDirectory from '../../components/company-directory/company-directory';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          name: 'Feet',
          symbol: 'ft',
        },
        {
          name: 'Centimeters',
          symbol: 'cm',
        },
        {
          name: 'Inches',
          symbol: 'inc',
        },
      ],
      allJobs: [],
      selectedPaper: null,
      selectedUnit: null,
      job: {
        totalCost: 0.0,
        title: 'Title of the job',
        width: null,
        height: null,
        quantity: 25,
        comment: 'Please use the best options for the job',
      },
    };
    this.ref = React.createRef();
  }

  checkJobCost = () => {
    const { selectedPaper, job } = this.state;
    if (selectedPaper !== null) {
      const cost = (selectedPaper.unitPrice * job.quantity);
      const newJob = job;
      job.totalCost = cost;
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
    }), () => { this.checkJobCost(); });
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { job } = this.state;
    job[name] = value;
    this.setState((state) => ({
      ...state,
      job,
    }));
  };

  handleCommentChange = (data) => {
    const { job } = this.state;
    job.comment = data;
    this.setState((state) => ({
      ...state,
      job,
    }));
  }

  clearAllFields = () => {
    this.setState((state) => ({
      ...state,
      job: {
        title: null,
        width: null,
        height: null,
        quantity: 0,
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
  };

  render() {
    const {
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
					<div className="">
						<Divider type="faint" title="Company" />
						<div className="m-t-20">
							Open Company directory to select a company
							<CompanyDirectory />
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
					<div className="m-b-20">
						<InputGroup
							classes="small"
							center
							inline
							placeholder1="Width"
							placeholder2="Height"
							label="Size"
							value1={width}
							value2={height}
							labelName="size"
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
							value={quantity}
							placeholder="How many pieces do you want?"
						/>
					</div>
					<div className="m-b-20">
						<FormGroup
							classes="small"
							center
							type="text"
							label="Cost"
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
							small
							content="Save as Draft"
						/>
						<Button
							positive
							small
							content="Continue"
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
