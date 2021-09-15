/* eslint-disable react/prop-types */
import React from 'react';
// import WarningIcon from '@material-ui/icons/Warning';

import './ErrorLabel.scss';

const ErrorLabel = ({ error, classes="" }) => (
	<div className={`${classes} field-error`}>
		{error}
	</div>
);

export default ErrorLabel;
