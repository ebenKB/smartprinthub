import React from 'react';
import './JobListItemHeading.scss';
import { PropTypes } from 'prop-types';

const JobListItem = ({ classes, children }) => (
	<div className={`job-list__heading ${classes}`}>
		{children}
	</div>
);

JobListItem.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

JobListItem.defaultProps = {
  classes: '',
};

export default JobListItem;
