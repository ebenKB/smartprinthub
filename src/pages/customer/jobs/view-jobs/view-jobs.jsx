import React, { useState } from 'react';
import { Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Layout from '../../../../components/layout/layout';
import AppMainContent from '../../../../components/app-main-content/app-main-content';
import ListItem from '../../../../components/list-item/list-item';

const ViewJobs = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: 'Title of the job',
      status: 'Pending',
      createdAt: 'Monday, 22nd April 2020',
      jobType: 'Banner',
      labelColor: 'teal',
    },
    {
      id: 2,
      title: 'Wedding Banner',
      status: 'Completed',
      createdAt: 'Tuesday, 22nd April 2020',
      jobType: 'Sticker',
      labelColor: 'purple',
    },
    {
      id: 3,
      title: 'Birthday Cards',
      status: 'Rejected',
      createdAt: 'Friday, 2nd April 2020',
      jobType: 'Paper',
      labelColor: 'orange',
    },
    {
      id: 4,
      title: 'Saloon Banners',
      status: 'Queried',
      createdAt: 'Monday, 9th May 2020',
      jobType: 'Flag',
      labelColor: 'yellow',
    },
    {
      id: 5,
      title: 'For Sale Sticker',
      status: 'Pending',
      createdAt: 'Wednesday, 7th May 2020',
      jobType: 'Banner',
      labelColor: 'teal',
    },
    {
      id: 6,
      title: 'Wedding Banner',
      status: 'Completed',
      createdAt: 'Thursday, 3rd May 2020',
      jobType: 'Banner',
      labelColor: 'teal',
    },
    {
      id: 7,
      title: 'Phone Adevertisement',
      status: 'Completed',
      createdAt: 'Thursday, 1st May 2020',
      jobType: 'Sticker',
      labelColor: 'purple',
    },
    {
      id: 8,
      title: 'Saloon Banners',
      status: 'Queried',
      createdAt: 'Monday, 9th May 2020',
      jobType: 'Flag',
      labelColor: 'yellow',
    },
    {
      id: 9,
      title: 'Birthday Cards',
      status: 'Rejected',
      createdAt: 'Friday, 2nd April 2020',
      jobType: 'Paper',
      labelColor: 'orange',
    },
    {
      id: 10,
      title: 'Wedding Banner',
      status: 'Completed',
      createdAt: 'Tuesday, 22nd April 2020',
      jobType: 'Sticker',
      labelColor: 'purple',
    },
  ]);

  const viewMoreJobs = () => {
    console.log('We want to view more jobs');
  };

  return (
	<div>
		<Layout>
			<AppMainContent
				heading="Jobs"
			>
				<div>
					<div className="m-b-20 text-right">Sort</div>
					{jobs.map((job) => (
						<ListItem
							key={job.id}
							label={{ text: job.jobType.substring(0, 1), color: job.labelColor }}
							status={job.status}
							className="m-b-20"
						>
							<div>
								<Link to={`/job/${job.id}`}>
									<h3 className="caption">{job.title}</h3>
								</Link>
								You created this job and assinged it to
							</div>
							<div>{job.jobType}</div>
							<div>{job.createdAt}</div>
						</ListItem>
					))}
					<div className="m-t-40">
						<Divider />
						<Button
							content="View 10 more records"
							className="app-primary transparent"
							onClick={viewMoreJobs}
						/>
					</div>
				</div>
			</AppMainContent>
		</Layout>
	</div>
  );
};

export default ViewJobs;
