/* eslint-disable react/prop-types */
import React from 'react';
// import { Label } from 'semantic-ui-react';
import './JobListItem.scss';
import Tile from '../Tile/Tile';
import CircularLabel from '../CircularLabel/CircularLabel';


const ListItem = ({
  children, label, status, className,
}) => (
	<Tile>
		<div className={`job-list__wrapper ${className}`}>
			{/* <Label circular color={label.color}>
				<span className="content">{label.text}</span>
			</Label> */}
			<CircularLabel label={label} />
			{children}
			<div className={`status_${status.toLowerCase()}`}>{status}</div>
		</div>
	</Tile>
);

export default ListItem;
