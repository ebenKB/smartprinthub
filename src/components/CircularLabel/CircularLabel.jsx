import React from 'react';
import { Label } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import './CircularLabel.scss';

const CircularLabel = ({ label }) => (
	<Label circular color={label.color} className="circular-label">
		<span className="content">{label.text}</span>
	</Label>
);

CircularLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CircularLabel;
