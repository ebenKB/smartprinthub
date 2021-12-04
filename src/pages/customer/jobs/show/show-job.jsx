import React from 'react';
import { Button, Grid, } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import Divider from 'components/AppDivider/AppDivider';
import AppMainContent from 'components/app-main-content/app-main-content';
import AppWrapperLite from 'components/app-wrapper-lite/app-wrapper-lite';
import './show-job.scss';
import FileHandler from 'components/FileHandler/FileHandler';
import { FileHandlerProvider } from 'context/FileHandlerContext';
import { useSelector } from 'react-redux';
import { formatRawDate } from 'utils/app';
import JobStatus from 'components/JobStatus/JobStatus';
import CompanyDetailsCard from 'components/CompanyDetailsCard/CompanyDetailsCard';

const ShowJob = () => {
	const { id } = useParams();

	// find the current job from the state
	const jobs = useSelector((state) => state.job.userJobs);
	const job = jobs && jobs.find((job) => job._id === id);

	return (
		<div className="large container">
			<AppMainContent
				heading="Job details"
				parentClasses="app-pad"
			>
				<div className="heading-caption m-b-20">
					<Grid columns={2}>
						<Grid.Row>
							<Grid.Column>
								<h1 className="app-primary">{job.title}</h1>
							</Grid.Column>
							<Grid.Column className="text-right">
								<JobStatus status={job.status} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
				<AppWrapperLite>
					<Divider
						title="Job Details"
						type="faint"
					/>
					<div className="m-t-20 m-b-20">
						<p>{job.comment} -- description is here</p>
					</div>
					<div className="m-t-10">
						<div>{job.created_at ? `Created on ${formatRawDate(job.created_at)}` : "N/A"}</div>
						<div>Job Type: {job.papperType?.name.toUpperCase()}</div>
						<div>{job.width} x {job.height} {job.unit}</div>
						<div className="bold text-right app-primary">GHC {job.cost}</div>
					</div>
				</AppWrapperLite>
				<AppWrapperLite>
					<Divider
						title="Attachment"
						type="faint"
					/>
					<div className="m-t-20">
						<FileHandlerProvider>
							<FileHandler 
								file="https://www.thebalancecareers.com/thmb/-R1IBZfgMEw86o80ZjIH2sW6B4A=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/78494810-56a4f1035f9b58b7d0da011a.jpg"
							/>
						</FileHandlerProvider>
					</div>
				</AppWrapperLite>
				<CompanyDetailsCard companyID={job.companyID} />
				<Divider
					title=""
					type="faint"
				/>
				<div className="m-t-20">
					<Link to="/jobs">
						<Button content="Go Back" size="small" />
					</Link>
				</div>
			</AppMainContent>
		</div>
	)
}

export default ShowJob;
