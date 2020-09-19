import React from 'react';
import { PropTypes } from 'prop-types';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';
import CaptionWithBorder from '../CaptionWithBorder/CaptionWithBorder';

const CustomerCompanyPreview = ({ footer }) => (
	<RoundContentWrapper
		classes="opaque background app-pad"
		isRounded
		hasDivider={false}
	>
		<CaptionWithBorder>
			<h3>All Stars Shine Limited</h3>
		</CaptionWithBorder>
		<CaptionWithBorder>
			<div className="flex space-out">
				<div>Phone</div>
				<div className="bold">+233548085322</div>
			</div>
		</CaptionWithBorder>
		<CaptionWithBorder>
			<div className="flex space-out">
				<div>Email</div>
				<div className="bold">example@email.com</div>
			</div>
		</CaptionWithBorder>
		<CaptionWithBorder>
			<div className="flex space-out">
				<div>GPS Address</div>
				<div className="bold">GT-044-454</div>
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
				<div className="bold">Circle Kokmlemle</div>
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
		{footer}
	</RoundContentWrapper>
);

CustomerCompanyPreview.propTypes = {
  footer: PropTypes.element,
};

CustomerCompanyPreview.defaultProps = {
  footer: null,
};

export default CustomerCompanyPreview;
