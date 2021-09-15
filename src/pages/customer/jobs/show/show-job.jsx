import React from 'react';
import { Button, Grid, Label } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import Divider from '../../../../components/AppDivider/AppDivider';
import AppMainContent from '../../../../components/app-main-content/app-main-content';
import AppWrapperLite from '../../../../components/app-wrapper-lite/app-wrapper-lite';
import './show-job.scss';
import FileHandler from '../../../../components/FileHandler/FileHandler';
import { FileHandlerProvider } from '../../../../context/FileHandlerContext';
import { useSelector } from 'react-redux';

const ShowJob = () => {
	const { id }= useParams();

	// find the current job from the state
	const jobs = useSelector((state) => state.job.jobs);
	const job = jobs && jobs.find((job) => job.id == id);

	return (
		<div className="large container">
			<AppMainContent
				heading="Job details"
				parentClasses="app-pad"
			>
				<div className="heading-caption m-b-20">
					<Grid columns={2}>
						<Grid.Row>
							<Grid.Column>
								<h1 className="app-primary">Birthday Cards and Posters</h1>
							</Grid.Column>
							<Grid.Column className="text-right">
								<span className="">
									<Label color="blue" size="large">PENDING</Label>
								</span>
							</Grid.Column>
						</Grid.Row>
					</Grid>
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
					<div className="m-t-20">
						<div className="flex reverse">
							<Link to="/company/1">
								<div className="bold">View Company Details</div>
							</Link>
						</div>
					</div>
				</AppWrapperLite>
				<AppWrapperLite>
					<Divider
						title="Attachment"
						type="faint"
					/>
					<div className="m-t-20">
						<FileHandlerProvider>
							<FileHandler 
								file="https://www.thebalancecareers.com/thmb/-R1IBZfgMEw86o80ZjIH2sW6B4A=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/78494810-56a4f1035f9b58b7d0da011a.jpg"
							/>
						</FileHandlerProvider>
					</div>
				</AppWrapperLite>
				<Divider
					title=""
					type="faint"
				/>
				<div className="m-t-20">
					<Link to="/jobs">
						<Button content="Go Back" size="small" />
					</Link>
				</div>
			</AppMainContent>
		</div>
	)
}

export default ShowJob;
