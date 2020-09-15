/* eslint-disable react/prop-types */
import React from 'react';
import './CaptionWithBorder.scss';

const CaptionWithBorder = ({ caption, classes }) => (
	<div className={`border-caption ${classes} app border bottom`}>
		{caption}
	</div>
);

export default CaptionWithBorder;
