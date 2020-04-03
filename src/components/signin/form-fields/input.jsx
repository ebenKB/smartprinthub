import React from 'react';
import { Input } from 'semantic-ui-react';

const CustomInput = ({type, name, value, classes, placeholder}) => {
  return (
    <Input 
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`custom-input ${classes}`}
      onChange={console.log('The input has changed')}
    />
  )
}

export default CustomInput;
