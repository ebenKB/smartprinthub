/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Input } from 'semantic-ui-react';

import './input.scss';

const CustomInput = (props) => {
  const {
    type, value, name, classes = '', ...rest
  } = props;

  const getInput = () => {
    if (type !== '' && type.toLowerCase() === 'search') {
      return (
	<Input
		size="small"
		type={type}
		value={value}
		name={name}
		className={`custom ${classes}`}
		{...rest}
	/>
      );
    }
    return (
	<Input
		size="large"
		type={type}
		value={value}
		name={name}
		className={`custom ${classes}`}
		{...rest}
	/>
    );
  };

  return (
	<>
		{
    getInput()
  }
	</>
  );
};

export default CustomInput;
