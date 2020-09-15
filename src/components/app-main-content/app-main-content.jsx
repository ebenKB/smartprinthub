/* eslint-disable react/prop-types */
import React from 'react';
import './app-main-content.scss';

const AppMainContent = ({
  children, aside, padTop = false, hasAside = false, mainClasses = '', asideClasses = '', parentClasses = '',
}) => (
	<div>
		<div className={`main-content__body app-main-content
      ${parentClasses} 
      ${padTop === true ? 'padTop' : ''} 
      ${hasAside === true ? 'split' : 'single'}`}
  >
			<div className={`main-body ${mainClasses}`}>{children}</div>
			<div>
				<div className={`aside-content ${asideClasses}`}>{aside}</div>
			</div>
		</div>
	</div>
);

export default AppMainContent;
