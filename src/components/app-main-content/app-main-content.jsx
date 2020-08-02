/* eslint-disable react/prop-types */
import React from 'react';
import './app-main-content.scss';
import Divider from '../divider/divider';
// import AppContentWrapper from '../app-content-wrapper/app-content-wrapper';

const AppMainContent = ({ children }) => (
	<div>
		<div className="app-main-content">
			<div>{children}</div>
			<div>
				<div className="m-b-20">
					<h5 className="no-pad">Help 1</h5>
					<Divider type="faint" />
					<p className="p-t-10">
						We can put some content here. There is some help for you.
					</p>
				</div>
				<div>
					<h5 className="no-pad">Help 2</h5>
					<Divider type="faint" />
					<p className="p-t-10">
						We can put some content here. There is some help for you.
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default AppMainContent;
