import React, { useState } from 'react';
import {
  Divider, Button, Dropdown, Grid, Segment, Loader, Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppMainContent from '../../../../components/app-main-content/app-main-content';
import ListItem from '../../../../components/JobListItem/JobListItem';
import jobs from '../../../../app/mockdata/jobs';
import JobListHeading from '../../../../components/JobListItemHeading/JobListItemHeading';
import './ViewJobs.scss';
import SearchAndFilterWrapper from '../../../../components/SearchAndFilterWrapper/SearchAndFilterWrapper';
// import SearchInputLite from '../../../../components/form-fields/SearchInputLite/SearchInputLite';
import CustomFilter from '../../../../components/CustomFilter/CustomFilter';
import { JOB_STATUS } from '../../../../utils/constants';

const ViewJobs = () => {
	const PER_PAGE = 10;
	const [currentPage, setCurrentPage] = useState(1);

  const viewMoreJobs = () => {
    console.log('We want to view more jobs');
		setCurrentPage(currentPage + 1)
  };

	const getJobStatus = (job) => {
		console.log(job)
		switch(job.status.toLowerCase()) {
			case JOB_STATUS.PENDING.toLowerCase():
				return <span className="job_card pending_job">{job.status}</span>;

			case JOB_STATUS.COMPLETED.toLowerCase():
				return <span className="job_card success_job">{job.status}</span>;
		
			case JOB_STATUS.QUERIED.toLowerCase():
				return <span className="job_card queried_job">{job.status}</span>;

			case JOB_STATUS.REJECTED.toLowerCase():
				return <span className="job_card rejected_job">{job.status}</span>;

			default: return job.status
		}
	}
  return (
	<div>
		<SearchAndFilterWrapper>
			<CustomFilter text="Filter">
				<Dropdown.Item text="Job Title" />
				<Dropdown.Item text="Date Created" />
				<Dropdown.Item text="Status" />
			</CustomFilter>
		</SearchAndFilterWrapper>
		<AppMainContent
			heading="Jobs"
			parentClasses="app-pad"
			mainClasses="p-t-40"
		>
			<div className="view_jobs">
				<JobListHeading classes="four">
					<div>DESCRIPTION</div>
					<div>TYPE</div>
					<div>DATE</div>
					<div>STATUS</div>
				</JobListHeading>
				{jobs.map((job) => (
					<ListItem
						key={job.id}
						label={{ text: job.jobType.substring(0, 1), color: job.labelColor }}
						status={job.status}
						className="five"
					>
						<div>
							<Link to={`/jobs/view/${job.id}`}>
								<h3 className="caption">{job.title}</h3>
							</Link>
							Show the description of the job here.
						</div>
						<div>{job.jobType}</div>
						<div>{job.createdAt}</div>
						<div>
							{getJobStatus(job)}
						</div>
					</ListItem>
				))}
				<div className="m-t-20">
					<Segment>
						<Loader active size="large" />
						<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
					</Segment>
				</div>
				<div className="m-t-40 m-b-40 ">
					<Divider />
					<Grid columns={2}>
						<Grid.Row >
							<Grid.Column>
								20 items
							</Grid.Column>
							<Grid.Column className="text-right">
								<Button
									content={`View ${PER_PAGE} more Jobs`}
									className="app-primary transparent"
									onClick={viewMoreJobs}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		</AppMainContent>
	</div>
  );
};

export default ViewJobs;
