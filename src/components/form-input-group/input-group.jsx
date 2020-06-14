/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import InputValidator from '../form-fields/input-validator/input-validator';
import './form-input-group.scss';

const InputGroup = ({
  label, labelName, value1, value2, placeholder1, placeholder2, inline, center, classes, ...rest
}) => (
	<div className={`form-group ${inline ? 'inline' : 'block'} ${center ? 'center' : ''} ${classes}`}>
		<label htmlFor={labelName}>
			<span className="">{label}</span>
		</label>
		<div className="form-group__wrapper flex-center">
			<Dropdown
				placeholder="Units"
				compact
				selection
				options={[{ key: 1, text: 'cm', value: '1' }]}
			/>
			<InputValidator
				value={value1}
				type="text"
				placeholder={placeholder1}
				{...rest}
				className="m-r-5"
			/>
			<InputValidator
				value={value2}
				type="text"
				placeholder={placeholder2}
				{...rest}
			/>
		</div>
	</div>
);

export default InputGroup;
