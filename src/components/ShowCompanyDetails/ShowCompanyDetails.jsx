/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';

const ShowCompanyDetails = ({ company }) => (
	<div className="m-t-10 m-b-10">
		{company && (
			<>
				<div className="bold">{company.name}</div>
				<div>{company.phone}</div>
				<div>{company.companyInformation?.address}</div>
				<div className="sm-caption">{company.email}</div>
			</>
		)}
	</div>
);

ShowCompanyDetails.propTypes = {
  company: PropTypes.object.isRequired,
};

export default ShowCompanyDetails;
