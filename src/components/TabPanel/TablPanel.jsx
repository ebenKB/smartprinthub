/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;

  return (
	<div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	>
		{value === index && (
			<Box>
				{children}
			</Box>
		)}
	</div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default TabPanel;
