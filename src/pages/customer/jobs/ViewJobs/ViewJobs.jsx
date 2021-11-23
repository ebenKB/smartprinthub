import React, { useEffect, useState, useCallback } from 'react';
import {
  Divider, Button, Dropdown, Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppMainContent from 'components/app-main-content/app-main-content';
import JobListItem from 'components/JobListItem/JobListItem';
import JobListHeading from 'components/JobListItemHeading/JobListItemHeading';
import './ViewJobs.scss';
import SearchAndFilterWrapper from 'components/SearchAndFilterWrapper/SearchAndFilterWrapper';
import CustomFilter from 'components/CustomFilter/CustomFilter';
import { PER_PAGE } from 'utils/constants';
import { getAllJobs } from 'apiService/job';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserJobs, selectJobs } from 'redux/slices/job';
import { getRandomColour } from 'utils/randomColour';
import { formatRawDate, getErrorMessage } from 'utils/app';
import JobStatus from 'components/JobStatus/JobStatus';
import { setNotification } from 'redux/slices/app';
import { NotificationType } from 'enums/NotificationType.enum';

const ViewJobs = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const dispatch =  useDispatch();
	const jobs = useSelector(selectJobs);

  const viewMoreJobs = () => {
		setCurrentPage(currentPage + 1)
  };


	const fetchJobs = useCallback(async () => {
    try {
      const response = await getAllJobs();
			dispatch(saveUserJobs(response.data.jobs));
    } catch (error) {
			dispatch(setNotification({
				type: NotificationType.ERROR,
				message: getErrorMessage(error.response),
			}))
    }
  }, [dispatch])

	useEffect(() =>  {
    fetchJobs();
  }, [fetchJobs])

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
				{jobs && jobs.map((job) => (
					<JobListItem
						key={job.id}
						label={{ text: job.papperType?.name.substring(0, 1), color: getRandomColour()}}
						className="five"
					>
						<div>
							<Link to={`/jobs/view/${job._id}`}>
								<h3 className="caption">{job.title}</h3>
							</Link>
							Show the description of the job here.
						</div>
						<div>{job.papperType?.name.toUpperCase()}</div>
						<div>{job.created_at ? formatRawDate(job.created_at) : "N/A"}</div>
						<div>
							<JobStatus status={job.status} />
						</div>
					</JobListItem>
				))}
				{/* <div className="m-t-20">
					<Segment>
						<Loader active size="large" />
						<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
					</Segment>
				</div> */}
				<div className="m-t-40 m-b-40 ">
					<Divider />
					<Grid columns={2}>
						<Grid.Row >
							<Grid.Column>
								Showing {jobs ? jobs.length : 0} jobs
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
