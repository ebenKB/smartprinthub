import React, { useState } from 'react';
import { Button, Label } from 'semantic-ui-react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';
import { ReactComponent as DownloadIcon } from '../../../svg/download.svg';
import './ShowJobDetails.scss';
import CircularLabel from '../../../components/CircularLabel/CircularLabel';
import ReviseJobCostModal from '../../../components/ReviseJobCostModal/ReviseJobCostModal';
import ReviewJobModal from '../../../components/ReviewJobModal/ReviewJobModal';
import RejectJobModal from '../../../components/RejectJobModal/RejectJobModal';

const ShowJobDetails = () => {
  const [canReviseJob, setCanReviseJob] = useState(false);
  const [canReviseJobCost, setCanReviseJobCost] = useState(false);
  const [canRejectJob, setCanRejectJob] = useState(false);

  const closeModal = () => {
    setCanReviseJob(false);
    setCanReviseJobCost(false);
    setCanRejectJob(false);
  };

  return (
	<AppMainContent
		hasAside
		aside={<div>We can put some help content here</div>}
	>
		<h1>Birthday Cards and Flyers</h1>
		<RoundContentWrapper
			heading="Job Details"
			isRounded
		>
			<div className="m-t-20 job-details">
				<div className="flex center">
					<CircularLabel label={{ color: 'green', text: 'B' }} />
				</div>
				<div>
					<d className="bold big text">Banner</d>
					<div>Sent 60 minutes ago</div>
				</div>
				<div className="flex center">
					<span className="bold big text">GHC 98.89</span>
					<Label size="">
						FULL PAYMENT
					</Label>
				</div>
			</div>
		</RoundContentWrapper>
		<RoundContentWrapper
			classes="m-t-40"
			heading="Job owner"
			isRounded
		>
			<div className="m-t-20">
				<p>
					<div>Samuel Peter Forson</div>
					<div>example@email.com</div>
					<div>+233548086391</div>
				</p>
				<div className="m-t-20 text-right">
					<Button
						basic
						size="tiny"
						content="View Details"
						className="app-transparent"
					/>
				</div>
			</div>
		</RoundContentWrapper>
		<RoundContentWrapper
			heading="Download options"
			isRounded
			classes="m-t-40 download-options"
		>
			<div className="m-t-20">
				<p>If you download this job, it will be added to your list of jobs.</p>
				<div className="text-right">
					<Button
						basic
						size="tiny"
						content="Preview"
					/>
					<Button
						size="tiny"
						content={(
							<span>
								<span><DownloadIcon className="x-small icon m-r-5" /></span>
								<span>Download (30kb)</span>
							</span>
						)}
						positive
					/>
				</div>
			</div>
		</RoundContentWrapper>
		<RoundContentWrapper
			heading="Actions"
			isRounded
			classes="m-t-40 m-b-40"
		>
			{canReviseJob && <ReviseJobCostModal handleCloseAction={closeModal} />}
			{canReviseJobCost && <ReviewJobModal handleCloseAction={closeModal} />}
			{canRejectJob && <RejectJobModal handleCloseAction={closeModal} />}
			<div className="text-right m-t-40">
				<Button
					basic
					size="tiny"
					content="Reurn Job For Review"
					onClick={() => setCanReviseJob(true)}
				/>
				<Button
					basic
					size="tiny"
					content="Revise cost"
					onClick={() => setCanReviseJobCost(true)}
				/>
				<Button
					size="tiny"
					content="Reject Job"
					negative
					onClick={() => setCanRejectJob(true)}
				/>
			</div>
		</RoundContentWrapper>
	</AppMainContent>
  );
};

export default ShowJobDetails;
