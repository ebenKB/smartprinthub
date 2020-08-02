import React from 'react';
import { Button, Label } from 'semantic-ui-react';
import Divider from '../../../../components/divider/divider';
import AppMainContent from '../../../../components/app-main-content/app-main-content';
import AppWrapperLite from '../../../../components/app-wrapper-lite/app-wrapper-lite';
import './show-job.scss';
import ImagePreview from '../../../../components/ImagePreview/ImagePreview';
import FileItemHandler from '../../../../components/FileItemHandler/FileItemHandler';

const ShowJob = () => (
	<>
		<AppMainContent
			heading="Job details"
		>
			<ImagePreview />
			<div className="heading-caption m-b-20">
				<h1 className="app-primary">Birthday Cards and Posters</h1>
				<span className="m-l-5">
					<Label color="blue" size="tiny">pending</Label>
				</span>
			</div>
			<AppWrapperLite>
				<Divider
					title="Job Details"
					type="faint"
				/>
				<div className="m-t-10">
					<div>Created on Friday, July 30, 2020</div>
					<div>Job Type: Banner</div>
					<div>23 x 34 inches</div>
					<div className="bold text-right app-primary">GHC 400</div>
				</div>
			</AppWrapperLite>
			<AppWrapperLite>
				<Divider
					title="Company Details"
					type="faint"
				/>
				<div className="m-t-20">
					<div className="bold">Digital Age Printing Limited</div>
					<div>example@email.com</div>
					<div>Circle - Kokomlemle</div>
					<div className="bold app-primary">+233 548086391</div>
				</div>
				<div className="m-t-20 text-right">
					<Button size="small" positive>View Profile</Button>
				</div>
			</AppWrapperLite>
			<AppWrapperLite>
				<Divider
					title="Attachment"
					type="faint"
				/>
				<div className="m-t-20">
					<FileItemHandler />
				</div>
			</AppWrapperLite>
			<Divider
				title=""
				type="faint"
			/>
			<div className="m-t-20">
				<Button content="Go Back" size="small" />
			</div>
		</AppMainContent>
	</>
);

export default ShowJob;
