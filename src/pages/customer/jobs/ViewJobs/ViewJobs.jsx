import React from 'react';
import { Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppMainContent from '../../../../components/app-main-content/app-main-content';
import ListItem from '../../../../components/JobListItem/JobListItem';
import jobs from '../../../../app/mockdata/jobs';
import './ViewJobs.scss';

const ViewJobs = () => {
  const viewMoreJobs = () => {
    console.log('We want to view more jobs');
  };

  return (
	<div>
		<AppMainContent
			heading="Jobs"
		>
			<div>
				<div className="m-b-20 text-right">Sort</div>
				<div className="job-heading">
					<div>DESCRIPTION</div>
					<div>TYPE</div>
					<div>DATE</div>
					<div>STATUS</div>
				</div>
				{jobs.map((job) => (
					<ListItem
						key={job.id}
						label={{ text: job.jobType.substring(0, 1), color: job.labelColor }}
						status={job.status}
						className="five"
					>
						<div>
							<Link to="/jobs/view/:id">
								<h3 className="caption">{job.title}</h3>
							</Link>
							You created this job and assinged it to
						</div>
						<div>{job.jobType}</div>
						<div>{job.createdAt}</div>
					</ListItem>
				))}
				<div className="m-t-40 m-b-40">
					<Divider />
					<Button
						content="View 10 more records"
						className="app-primary transparent"
						onClick={viewMoreJobs}
					/>
				</div>
			</div>
		</AppMainContent>
	</div>
  );
};

export default ViewJobs;
