import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import './CompanyLabel.scss';

const CompanyLabel = ({ companyName }) => (
	<Label size="small" className="user-company">
		{companyName}
		<Icon name="trash" />
	</Label>
);

CompanyLabel.propTypes = {
  companyName: PropTypes.string.isRequired,
};

export default CompanyLabel;
