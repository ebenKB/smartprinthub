/* eslint-disable react/prop-types */
import React from 'react';
// import { Label } from 'semantic-ui-react';
import './JobListItem.scss';
import Tile from '../Tile/Tile';
import CircularLabel from '../CircularLabel/CircularLabel';


const ListItem = ({
  children, label, className,
}) => (
	<Tile>
		<div className={`job-list__wrapper ${className}`}>
			<CircularLabel label={label} />
			{children}
		</div>
	</Tile>
);

export default ListItem;
