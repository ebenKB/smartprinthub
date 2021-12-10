import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';
import CaptionWithBorder from '../CaptionWithBorder/CaptionWithBorder';
import AppMainContent from 'components/app-main-content/app-main-content';
import { getCompanyDetails } from 'apiService/company';
import LinearProgress from 'components/LinearProgress/LinearProgress';

const CustomerCompanyPreview = ({ footer, companyID }) => {
	const [company, setCompany] = useState(null);
	const [progress, setProgress] = useState(null);

	const loadCompanyInformation = async () => {
		try {
			const response = await getCompanyDetails(companyID, (progress)=> setProgress(progress));
			setCompany(response.data);
		} catch (error) {}
	}

	useEffect(() => {
		loadCompanyInformation();
	}, []);

	return (
	// <RoundContentWrapper
	// 	classes="opaque background app-pad"
	// 	isRounded
	// 	hasDivider={false}
	// >
	<>
	<LinearProgress progressEvent={progress}/>
	<AppMainContent
		mainClasses="very large container center"
	>
		
		{/* {company && ( */}
		<>
			<CaptionWithBorder>
				<h3>All Stars Shine Limited</h3>
			</CaptionWithBorder>
			<CaptionWithBorder>
				<div className="flex space-out">
					<div>Phone</div>
					<div className="bold">{company ? company.phone : "n/a"}</div>
				</div>
			</CaptionWithBorder>
			<CaptionWithBorder>
				<div className="flex space-out">
					<div>Email</div>
					<div className="bold">{company ? company.email : "n/a"}</div>
				</div>
			</CaptionWithBorder>
			<CaptionWithBorder>
				<div className="flex space-out">
					<div>GPS Address</div>
					<div className="bold">
						{company && company.companyInformation ? company.companyInformation.digitalAddress : "n/a"}
					</div>
				</div>
			</CaptionWithBorder>
			<CaptionWithBorder>
				<div className="flex space-out">
					<div>Landmark</div>
					<div className="bold">Close to the filling station</div>
				</div>
			</CaptionWithBorder>
			<CaptionWithBorder>
				<div className="flex space-out">
					<div>Address</div>
					<div className="bold">
						{company && company.companyInformation ? company.companyInformation.address : "n/a"}
					</div>
				</div>
			</CaptionWithBorder>
			<CaptionWithBorder>
				<div className="flex space-out">
					<div>Successful Jobs</div>
					<div className="bold">12</div>
				</div>
			</CaptionWithBorder>
			<CaptionWithBorder>
				<div className="flex space-out">
					<div>Rejected Jobs</div>
					<div className="bold">3</div>
				</div>
			</CaptionWithBorder>
			<CaptionWithBorder>
				<div className="flex space-out">
					<div>Company rating</div>
					<div className="bold">*****</div>
				</div>
			</CaptionWithBorder>
		</>
		{/* )} */}
		<div>{footer}</div>
	</AppMainContent>
	</>
	// </RoundContentWrapper>
	)
}

CustomerCompanyPreview.propTypes = {
  footer: PropTypes.element,
};

CustomerCompanyPreview.defaultProps = {
  footer: null,
};

export default CustomerCompanyPreview;
