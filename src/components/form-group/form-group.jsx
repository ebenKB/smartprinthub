/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-else-return */
import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import Input from '../form-fields/input/input';
import InputValidator from '../form-fields/input-validator/input-validator';
import './form-group.scss';
import Textarea from '../form-fields/textarea/textarea';
import Dropzone from '../dropzone/dropzone';
import DropdownValidator from '../form-fields/dropdown-validator/dropdown-validator';

const FormGroup = ({
  type,
  placeholder,
  label,
  labelName,
  center,
  classes = '',
  inline = true,
  amountLabel,
  options = [
    {
      key: '1',
      text: 'Sample data 1',
      value: '1',
    },
    {
      key: '2',
      text: 'Sample data 2',
      value: '2',
    },
  ], ...rest
}) => {
  const getElement = () => {
    if (type === 'text' || type === 'password' || type === 'number' || type === 'email') {
      return <InputValidator type={type} placeholder={placeholder} {...rest} />;
    } else if (type === 'textarea') {
      return (
	<Textarea
		rows={rest.rows}
		cols={rest.cols}
		{...rest}
	/>
      );
    } else if (type === 'date') {
      return <Input type={type} {...rest} />;
    } else if (type === 'dropdown') {
      return (
	<Dropdown
		placeholder={placeholder}
		selection
		options={options}
		/* className={`md-dropdown ${rest.classes}`} */
		className={`${classes}`}
		{...rest}
	/>
      );
    } else if (type === 'dropdown-validator') {
      return (
	<DropdownValidator
		placeholder={placeholder}
		selection
		options={options}
		className={`${classes}`}
		{...rest}
	/>
      );
    } else if (type === 'amount') {
      return (
	<InputValidator
		type={type}
		placeholder={placeholder}
		label={amountLabel}
		{...rest}
	/>
      );
    } else if (type === 'dropzone') {
      return (<Dropzone />);
    } else {
      return rest.children;
    }
  };

  return (
	<div className={`form-group ${inline ? 'inline' : 'block'} ${center ? 'center' : ''} ${classes}`}>
		<label htmlFor={labelName}>
			<span className="">{label}</span>
		</label>
		<div>{getElement()}</div>
	</div>
  );
};

export default FormGroup;
