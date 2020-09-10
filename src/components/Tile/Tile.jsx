import React from 'react';
import { PropTypes } from 'prop-types';
import './Tile.scss';

const Tile = ({ children }) => (
	<div className="tile">
		{children}
	</div>
);

Tile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tile;
