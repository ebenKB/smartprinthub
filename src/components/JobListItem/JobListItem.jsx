/* eslint-disable react/prop-types */
import React from 'react';
import { Label } from 'semantic-ui-react';
import './JobListItem.scss';


const ListItem = ({
  children, label, status, className,
}) => (
	<div className={`tile ${className}`}>
		<Label circular color={label.color}>
			<span className="content">{label.text}</span>
		</Label>
		{children}
		<div className={`status_${status.toLowerCase()}`}>{status}</div>
	</div>
);

export default ListItem;
