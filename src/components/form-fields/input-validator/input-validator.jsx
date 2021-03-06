/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import { Input } from 'semantic-ui-react';
// import FormError from '../../snippets/error-icon/error-icon';
import ErrorIcon from '../../ErrorIcon/ErrorIcon';

class InputValidator extends ValidatorComponent {
  render() {
    const {
      errorMessages, validators, requiredError, validatorListener, instantValidate, ...rest
    } = this.props;
    return (
	<Fragment>
		<Input
			{...rest}
			ref={(r) => { this.input = r; }}
		/>
		<>{this.getErrorText()}</>
	</Fragment>
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

export default InputValidator;
