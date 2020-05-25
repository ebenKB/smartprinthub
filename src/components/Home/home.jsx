import React, { useRef } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import Layout from '../layout/layout';
import AppMainContent from '../app-main-content/app-main-content';
import FormGroup from '../form-group/form-group';

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
					<div className="m-b-20">
						<FormGroup
							center
							type="text"
							label="Job Title"
							placeholder="Enter Job Title"
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
				</ValidatorForm>
			</AppMainContent>
		</Layout>
	</div>
  );
};

export default Home;
