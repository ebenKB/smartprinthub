/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Controller } from 'react-hook-form';
import { PropTypes } from 'prop-types';
import './InputValidatorHook.scss';
import ErrorLabel from '../../ErrorLabel/ErrorLabel';

const InputValidatorHook = ({
  control, as, name, label, rules, error, ...rest
}) => (
	<div className="input-validator__wrapper">
		<Controller
			as={as}
			name={name}
			control={control}
			defaultValue={rest.defaultValue}
			rules={rules}
		/>
		{error && <ErrorLabel error={error} classes="sm-caption" />}
	</div>
);

InputValidatorHook.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  rules: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  as: PropTypes.node.isRequired,
};

export default InputValidatorHook;
