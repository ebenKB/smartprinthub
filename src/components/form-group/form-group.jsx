/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-else-return */
import React from 'react';
import {
  Form, TextArea, Dropdown,
} from 'semantic-ui-react';

import Input from '../form-fields/input/input';
import InputValidator from '../form-fields/input-validator/input-validator';
import './form-group.scss';
import Textarea from '../form-fields/textarea/textarea';
import Dropzone from '../dropzone/dropzone';

const FormGroup = ({
  type,
  placeholder,
  label,
  labelName,
  center,
  classes = '',
  inline = true,
  options = [
    {
      key: '1',
      text: 'Emmanuel',
      value: '1',
    },
    {
      key: '2',
      text: 'Elorm',
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
		search
		selection
		options={options}
		defaultValue={rest.defaultValue}
		className={`md-dropdown ${rest.classes}`}
		onChange={(e, data) => rest.onChange(data.value)}
	/>
      );
    } else if (type === 'textarea') {
      return (
	<Form>
		<TextArea placeholder={placeholder} style={{ minHeight: 100 }} />
	</Form>
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
