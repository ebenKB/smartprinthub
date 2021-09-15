import React from 'react';
import { PropTypes } from 'prop-types';
import './GraphItems.scss';

const GraphItems = ({ children }) => (
	<div className="graph-items__wrapper">
		{children}
	</div>
);

GraphItems.propTypes = {
  children: PropTypes.any.isRequired,
};

export default GraphItems;
