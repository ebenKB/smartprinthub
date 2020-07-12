import React from 'react';
import './company-directory.scss';
import { Button } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import { ReactComponent as CloseIcon } from '../../svg/close.svg';

const CompanyDirectory = ({ handleCloseAction }) => (
	<div className="company-directory__wrapper">
		<div className="content">
			<div className="company-directory__header flex center">
				<span className="bold">Company Directory</span>
				<span>
					<Button
						content={<CloseIcon className="medium icon" />}
						onClick={handleCloseAction}
						className="transparent"
					/>
				</span>
			</div>
		</div>
		<div className="footer">
			<Button
				fluid
				positive
				content="Assign company"
			/>
		</div>
	</div>
);


CompanyDirectory.propTypes = {
  handleCloseAction: PropTypes.func.isRequired,
};

export default CompanyDirectory;
