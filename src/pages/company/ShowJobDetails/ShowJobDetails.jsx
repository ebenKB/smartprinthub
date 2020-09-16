import React, { useState } from 'react';
import { Button, Label } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';
// import { ReactComponent as DownloadIcon } from '../../../svg/download.svg';
import './ShowJobDetails.scss';
import CircularLabel from '../../../components/CircularLabel/CircularLabel';
import ReviseJobCostModal from '../../../components/ReviseJobCostModal/ReviseJobCostModal';
import ReviewJobModal from '../../../components/ReviewJobModal/ReviewJobModal';
import RejectJobModal from '../../../components/RejectJobModal/RejectJobModal';
import AcceptJobModal from '../../../components/AcceptJobModal/AcceptJobModal';
import FileItemHandler from '../../../components/FileItemHandler/FileItemHandler';
import Help from '../../../components/Help/Help';
import Helps from '../../../utils/help/JobActions';

const ShowJobDetails = () => {
  const [canReviseJob, setCanReviseJob] = useState(false);
  const [canReviseJobCost, setCanReviseJobCost] = useState(false);
  const [canRejectJob, setCanRejectJob] = useState(false);
  const [canAcceptJob, setCanAcceptJob] = useState(false);
  const history = useHistory();

  const closeModal = () => {
    setCanReviseJob(false);
    setCanReviseJobCost(false);
    setCanRejectJob(false);
    setCanAcceptJob(false);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
	<AppMainContent
		hasAside
		aside={<Help helps={Helps} />}
		padTop
		asideClasses="p-l-30 p-r-30"
	>
		<div className="p-l-30 p-r-30">
			<RoundContentWrapper
				heading="Job Details"
				isRounded
				classes="opaque container center"
			>
				<div className="m-t-20 job-details">
					<div className="flex center">
						<CircularLabel label={{ color: 'green', text: 'B' }} />
					</div>
					<div>
						<d className="bold big text">Banner</d>
						<div className="">Sent 60 minutes ago</div>
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
				classes="m-t-40 opaque container center"
				heading="Job owner"
				isRounded
			>
				<div className="m-t-20">
					<p>
						<div>Samuel Peter Forson</div>
						<div>example@email.com</div>
						<div>+233548086391</div>
					</p>
					{/* <div className="m-t-20 text-right">
					<Button
						basic
						size="small"
						content="View Details"
						className="app-transparent"
					/>
				</div> */}
				</div>
			</RoundContentWrapper>
			<RoundContentWrapper
				heading="Download options"
				isRounded
				classes="m-t-40 download-options opaque container center"
			>
				<div className="m-t-20">
					<p>If you download this job, it will be added to your list of jobs.</p>
					{/* <div className="text-right">
					<Button
						basic
						size="small"
						content="Preview"
					/>
					<Button
						size="small"
						content={(
							<span>
								<span>
									<DownloadIcon className="x-small icon m-r-5" />
								</span>
								<span>Download (30kb)</span>
							</span>
						)}
						positive
						onClick={() => setCanAcceptJob(true)}
					/>
				</div> */}
					<div className="text-rights">
						<FileItemHandler
							handleDownloadAction={() => setCanAcceptJob(true)}
						/>
					</div>
				</div>
			</RoundContentWrapper>
			<RoundContentWrapper
				heading="Actions"
				isRounded
				classes="m-t-40 m-b-40 opaque container center"
			>
				{canReviseJob && <ReviewJobModal handleCloseAction={closeModal} />}
				{canReviseJobCost && <ReviseJobCostModal handleCloseAction={closeModal} />}
				{canRejectJob && <RejectJobModal handleCloseAction={closeModal} />}
				{canAcceptJob && <AcceptJobModal handleCloseAction={closeModal} />}
				<div className="text-right m-t-40">
					<Button
						basic
						size="small"
						content="Go Back"
						onClick={goBack}
					/>
					<Button
						basic
						size="small"
						content="Return Job For Review"
						onClick={() => setCanReviseJob(true)}
					/>
					<Button
						basic
						size="small"
						content="Revise cost"
						onClick={() => setCanReviseJobCost(true)}
					/>
					<Button
						size="small"
						content="Reject Job"
						negative
						onClick={() => setCanRejectJob(true)}
					/>
				</div>
			</RoundContentWrapper>
		</div>
	</AppMainContent>
  );
};

export default ShowJobDetails;
