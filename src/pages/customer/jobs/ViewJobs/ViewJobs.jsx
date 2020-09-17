import React from 'react';
import {
  Divider, Button, Dropdown, Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppMainContent from '../../../../components/app-main-content/app-main-content';
import ListItem from '../../../../components/JobListItem/JobListItem';
import jobs from '../../../../app/mockdata/jobs';
import JobListHeading from '../../../../components/JobListItemHeading/JobListItemHeading';
import './ViewJobs.scss';
import SearchAndFilterWrapper from '../../../../components/SearchAndFilterWrapper/SearchAndFilterWrapper';
import SearchInputLite from '../../../../components/form-fields/SearchInputLite/SearchInputLite';

const ViewJobs = () => {
  const viewMoreJobs = () => {
    console.log('We want to view more jobs');
  };

  return (
	<div>
		<SearchAndFilterWrapper>
			<div className="">
				<Menu compact size="small" secondary>
					<Dropdown text="Filter" options={null} simple item />
				</Menu>
			</div>
			<SearchInputLite />
		</SearchAndFilterWrapper>
		<AppMainContent
			heading="Jobs"
			parentClasses="app-pad"
			mainClasses="p-t-40"
		>
			<div>
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
							<Link to="/jobs/view/:id">
								<h3 className="caption">{job.title}</h3>
							</Link>
							You created this job and assinged it to
						</div>
						<div>{job.jobType}</div>
						<div>{job.createdAt}</div>
						<div>{job.status}</div>
					</ListItem>
				))}
				<div className="m-t-40 m-b-40 text-right">
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
