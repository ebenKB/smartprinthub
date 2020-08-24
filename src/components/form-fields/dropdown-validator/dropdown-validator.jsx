/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import { Dropdown } from 'semantic-ui-react';
import ErrorIcon from '../../ErrorIcon/ErrorIcon';

class DropdownValidator extends ValidatorComponent {
  render() {
    const {
      errorMessages, validators, requiredError, validatorListener, ...rest
    } = this.props;
    return (
	<div>
		<Dropdown
			{...rest}
			ref={(r) => { this.input = r; }}
		/>
		{this.getErrorText()}
	</div>
    );
  }

  getErrorText() {
    const { isValid } = this.state;
    if (isValid) {
      return null; // / there is no error
    }

    return (
	<div>
		<ErrorIcon
			error={this.getErrorMessage()}
			classes="icon kt-logo__very-small"
		/>
	</div>
    );
  }
}

export default DropdownValidator;
