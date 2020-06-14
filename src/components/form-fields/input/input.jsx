import React, { Fragment } from 'react';
import { Input } from 'semantic-ui-react';

import './input.scss';

class CustomInput extends React.Component {
  render() {
    const {
      type, value, name, classes, action = '', ...rest
    } = this.props;

    const getInput = () => {
      if (type !== '' && type.toLowerCase() === 'search') {
        return (
	<Input
		type={type}
		value={value}
		name={name}
		className={classes}
		action="Search"
		{...rest}
	/>
        );
      }
      return (
	<Input
		type={type}
		value={value}
		name={name}
		className={classes}
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
  }
}

export default CustomInput;
