/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import JobListItem from '../../../components/JobListItem/JobListItem';
import jobs from '../../../app/mockdata/jobs';
import Divider from '../../../components/divider/divider';
import JobListItemHeading from '../../../components/JobListItemHeading/JobListItemHeading';
import { ReactComponent as UpArrow } from '../../../svg/up-arrow.svg';
import { ReactComponent as DownArrow } from '../../../svg/down-arrow-alt.svg';
import { ReactComponent as Close } from '../../../svg/close-alt-2.svg';
import { ReactComponent as Timer } from '../../../svg/loop.svg';
import { ReactComponent as Done } from '../../../svg/done.svg';

import './ViewJobs.scss';
import SearchAndFilterWrapper from '../../../components/SearchAndFilterWrapper/SearchAndFilterWrapper';
import SearchInput from '../../../components/form-fields/search-input/search-input';

const ViewJobs = () => {
  const options = [
    {
      key: 1,
      text: () => (
      <span>
        <Timer className="x-small icon" />
        <span>Pending</span>
      </span>
      ),
      value: 1,
    },
    {
      key: 2,
      text: () => (
      <span>
        <Done className="x-small icon" />
        <span>Completed</span>
      </span>
      ),
      value: 2,
    },
    {
      key: 3,
      text: () => (
      <span className="flex-center">
        <Close className="x-small icon" />
        <span>Rejected</span>
      </span>
      ),
      value: 3,
    },
    {
      key: 4,
      text: () => (
      <span>
        <UpArrow className="x-small icon" />
        <span>Cost Ascending</span>
      </span>
      ),
      value: 4,
    },
    {
      key: 5,
      text: () => (
      <span>
        <DownArrow className="x-small icon" />
        <span>Cost Ascending</span>
      </span>
      ),
      value: 5,
    },
    {
      key: 6,
      text: () => (
      <span>
        <UpArrow className="x-small icon" />
        <span>Date Ascending</span>
      </span>
      ),
      value: 6,
    },
    {
      key: 7,
      text: () => (
      <span>
        <DownArrow className="x-small icon" />
        <span>Date Descending</span>
      </span>
      ),
      value: 7,
    },
  ];

  return (
	<div>
    <SearchAndFilterWrapper>
      <div className="">
        <Menu compact size="small" secondary>
          <Dropdown text="Filter" options={options} simple item />
        </Menu>
      </div>
      {/* <SearchInput /> */}
    </SearchAndFilterWrapper>
		<AppMainContent
			heading="Jobs"
		>
			<div>
				<JobListItemHeading classes="five">
					<div>DESCRIPTION</div>
					<div>COST</div>
					<div>TYPE</div>
					<div>DATE</div>
					<div>STATUS</div>
				</JobListItemHeading>
				{jobs.map((job) => (
          <Link to={`/company/jobs/${job.id}`}>
					<JobListItem
						key={job.id}
						label={{ text: job.jobType.substring(0, 1), color: job.labelColor }}
						status={job.status}
						className="six"
					>
						<div>
							<Link to={`/company/jobs/${job.id}`}>
								<h3 className="caption">{job.title}</h3>
							</Link>
							You created this job and assinged it to
						</div>
						<span className="app-primary">{job.cost}</span>
						<div>{job.jobType}</div>
						<div>{job.createdAt}</div>
					</JobListItem>
          </Link>
				))}
				<div className="m-t-40 m-b-40">
					<Divider />
					<Button
						content="View 10 more records"
						className="app-primary transparent"
						onClick={() => console.log('View more jobs')}
					/>
				</div>
			</div>
		</AppMainContent>
	</div>
  );
};

export default ViewJobs;
