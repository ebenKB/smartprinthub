import React from 'react';
import { Divider } from 'semantic-ui-react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
// import AppContentWrapper from '../../../components/app-content-wrapper/app-content-wrapper';
import AppWrapperLite from '../../../components/app-wrapper-lite/app-wrapper-lite';

const ViewCompanyDetails = () => (
	<AppMainContent>
		<div className="large container">
			{/* <AppContentWrapper heading="View Company Details">
				<h1>Company Detials</h1>
				<h4>Design form to view company details</h4>
				<p>We can view all the detials of a company here</p>
			</AppContentWrapper> */}
			<AppWrapperLite>
				<h2>Shiny Colours Company Limited</h2>
				<Divider type="thick" />
			</AppWrapperLite>
		</div>
	</AppMainContent>
);

export default ViewCompanyDetails;
