/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import './ListItemWrapper.scss';

const ListItemWrapper = ({ children }) => (
	<div className="list-item__wrapper">
		{children}
	</div>
);


ListItemWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ListItemWrapper;
