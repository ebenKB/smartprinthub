/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import InputValidator from '../form-fields/input-validator/input-validator';
import './form-input-group.scss';

const InputGroup = ({
  label, labelName, placeholder1, placeholder2, inline, center, classes, ...rest
}) => (
	<div className={`form-group ${inline ? 'inline' : 'block'} ${center ? 'center' : ''} ${classes}`}>
		<label htmlFor={labelName}>
			<span className="">{label}</span>
		</label>
		<div className="">
			<InputValidator type="text" placeholder={placeholder1} {...rest} className="m-r-5" />
			<InputValidator type="text" placeholder={placeholder2} {...rest} />
		</div>
	</div>
);

export default InputGroup;
