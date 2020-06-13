import React, { useRef } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { Button } from 'semantic-ui-react';
import Layout from '../layout/layout';
import AppMainContent from '../app-main-content/app-main-content';
import FormGroup from '../form-group/form-group';
import InputGroup from '../form-input-group/input-group';
import Divider from '../divider/divider';
import AddItem from '../add-item/add-item';

const Home = () => {
  const ref = useRef();
  return (
	<div>
		<Layout>
			<AppMainContent
				heading="New Job"
			>
				<ValidatorForm
					ref={ref}
					onSubmit={console.log('submitting form...')}
				>
					<Divider type="faint" title="Job Details" />
					<div className="m-b-20 m-t-20">
						<FormGroup
							center
							type="text"
							label="Job Title"
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
							labelName="size"
						/>
					</div>
					<div className="m-b-20 m-t-20">
						<FormGroup
							center
							type="dropdown"
							label="Job Type"
							placeholder="Select job type"
						/>
					</div>
					<div className="m-b-20">
						<FormGroup
							classes="small"
							center
							type="text"
							label="Quantity"
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
						/>
					</div>
					<AddItem title="Add new job" classes="app-primary float-r" iconClasses="small icon m-r-5" />
					<div className="m-t-40">
						<Divider type="faint" title="Company" />
						<div className="m-t-20">
							Open Company directory to select a company
						</div>
					</div>
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
};

export default Home;
