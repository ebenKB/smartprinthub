/* eslint-disable react/prop-types */
import React from 'react';
import WarningIcon from '@material-ui/icons/Warning';

import './ErrorIcon.scss';

const ErrorIcon = ({ error, classes }) => (
	<div className="field-error">
		<WarningIcon className={classes} />
		{error}
	</div>
);

export default ErrorIcon;
