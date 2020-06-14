import React from 'react';
import './company-directory.scss';
import { Button } from 'semantic-ui-react';

const CompanyDirectory = () => (
	<div className="company-directory__wrapper">
		<div className="content">
			<div className="header">Company Directory</div>
		</div>
		<div className="footer">
			<Button
				fluid
				success
				content="Assign company"
			/>
		</div>
	</div>
);

export default CompanyDirectory;
