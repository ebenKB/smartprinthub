/* eslint-disable react/prop-types */
import React from 'react';
import './CaptionWithBorder.scss';

const CaptionWithBorder = ({ children, caption, classes }) => (
	<>
		{children && (
			<div className={`border-caption ${classes} app border bottom`}>
				{children}
			</div>
		)}
		{caption && (
			<div className={`border-caption ${classes} app border bottom`}>
				{caption}
			</div>
		)}
	</>
);

export default CaptionWithBorder;
