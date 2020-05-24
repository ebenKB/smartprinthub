/* eslint-disable react/prop-types */
import React from 'react';
import './app-content-wrapper.scss';

const AppContentWrapper = ({ children, heading }) => (
	<div className="app-conten-wrapper">
		<div className="app-content-wrapper__heading">
			<h2>{heading}</h2>
		</div>
		<div className="app-content-wrapper__body">{children}</div>
	</div>
);

export default AppContentWrapper;
