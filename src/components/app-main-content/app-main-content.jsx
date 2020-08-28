/* eslint-disable react/prop-types */
import React from 'react';
import './app-main-content.scss';
// import AppContentWrapper from '../app-content-wrapper/app-content-wrapper';

const AppMainContent = ({ children, aside, hasAside = false }) => (
	<div>
		<div className={`main-content__body app-main-content ${hasAside === true ? 'split' : 'single'}`}>
			<div>{children}</div>
			<div>
				<div>{aside}</div>
			</div>
		</div>
	</div>
);

export default AppMainContent;
