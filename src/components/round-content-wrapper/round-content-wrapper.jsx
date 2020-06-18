/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import Divider from '../divider/divider';

const RoundContentWrapper = ({ children, heading }) => (
	<div className="content-wrapper">
		<h3>{heading}</h3>
		<Divider type="faint" />
		{children}
	</div>
);

RoundContentWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
};
export default RoundContentWrapper;
