/* eslint-disable react/forbid-prop-types */
import React from 'react';
import './app-wrapper-lite.scss';
import { PropTypes } from 'prop-types';

const AppWrapperLite = ({ children }) => (
	<div className="app-wrapper">
		{children}
	</div>
);

AppWrapperLite.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppWrapperLite;
