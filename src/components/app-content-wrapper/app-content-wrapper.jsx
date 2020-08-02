/* eslint-disable react/prop-types */
import React from 'react';
import './app-content-wrapper.scss';

const AppContentWrapper = ({ children, heading }) => (
	<div className="app-content-wrapper">
		<div className="app-content-wrapper__heading">
			<h3>{heading}</h3>
		</div>
		<div className="app-content-wrapper__body">{children}</div>
	</div>
);

export default AppContentWrapper;
