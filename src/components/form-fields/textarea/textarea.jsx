/* eslint-disable react/prop-types */
import React from 'react';
import { TextArea } from 'semantic-ui-react';
import './textarea.scss';

const Textarea = ({
  placeholder, rows, classes, value, onChange,
}) => (
	<TextArea
		placeholder={placeholder}
		onChange={(e, data) => onChange(data.value)}
		rows={rows}
		className={`${classes} custom`}
		value={value}
	/>
);

export default Textarea;
