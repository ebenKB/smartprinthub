import React, { useEffect, useState } from 'react';
import {
  Divider, Button, Dropdown, Grid, Segment, Loader, Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppMainContent from 'components/app-main-content/app-main-content';
import JobListItem from 'components/JobListItem/JobListItem';
// import jobs from 'app/mockdata/jobs';
import JobListHeading from 'components/JobListItemHeading/JobListItemHeading';
import './ViewJobs.scss';
import SearchAndFilterWrapper from 'components/SearchAndFilterWrapper/SearchAndFilterWrapper';
import CustomFilter from 'components/CustomFilter/CustomFilter';
import { JOB_STATUS, PER_PAGE } from 'utils/constants';
import { getAllJobs } from 'apiService/job';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserJobs, selectJobs } from 'redux/slices/job';
import { getStatusValues, Status } from 'enums/status.enum';
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
    console.log('We want to view more jobs');
		setCurrentPage(currentPage + 1)
  };

	// const getJobStatus = (job) => {
	// 	switch(job.status) {
	// 		case Status.PENDING:
	// 			return <span className="job_card pending_job">{getStatusValues(job.status)}</span>;

	// 		case Status.DONE:
	// 			return <span className="job_card success_job">{getStatusValues(job.status)}</span>;
		
	// 		case JOB_STATUS.QUERIED.toLowerCase():
	// 			return <span className="job_card queried_job">{getStatusValues(job.status)}</span>;

	// 		case JOB_STATUS.REJECTED.toLowerCase():
	// 			return <span className="job_card rejected_job">{getStatusValues(job.status)}</span>;

	// 		default: return getStatusValues(job.status)
	// 	}
	// }

	const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
			dispatch(saveUserJobs(response.data.jobs));
    } catch (error) {
      console.log("Error here", error)
			dispatch(setNotification({
				type: NotificationType.ERROR,
				message: getErrorMessage(error.response),
			}))
    }
  }

	useEffect(() =>  {
    fetchJobs();
  }, [])

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
