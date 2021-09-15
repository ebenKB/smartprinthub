/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import Divider from '../AppDivider/AppDivider';
import './RoundContentWrapper.scss';

const RoundContentWrapper = ({
  children, heading, classes, isRounded, hasShadow, hasDivider,
}) => {
  const getClasses = () => {
    let allClassess = `content-wrapper p-all-40 ${classes}`;
    if (isRounded) {
      allClassess = `${allClassess} rounded`;
    }
    if (hasShadow) {
      allClassess = `${allClassess} shadow-border`;
    }
    return allClassess;
  };

  return (
	<div className={getClasses()}>
		<h3>{heading}</h3>
		{hasDivider && <Divider type="faint" />}
		{children}
	</div>
  );
};

RoundContentWrapper.propTypes = {
  children: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  classes: PropTypes.string,
  isRounded: PropTypes.bool,
  hasShadow: PropTypes.bool,
  hasDivider: PropTypes.bool,
};

RoundContentWrapper.defaultProps = {
  classes: '',
  isRounded: false,
  hasShadow: true,
  hasDivider: true,
};

export default RoundContentWrapper;
