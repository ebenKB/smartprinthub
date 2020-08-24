/* eslint-disable react/forbid-prop-types */
import React from 'react';
import './app-wrapper-lite.scss';
import { PropTypes } from 'prop-types';

const AppWrapperLite = ({ children, classes }) => (
	<div className={`app-wrapper ${classes}`}>
		{children}
	</div>
);

AppWrapperLite.propTypes = {
  children: PropTypes.array.isRequired,
  classes: PropTypes.string.isRequired,
};

export default AppWrapperLite;
