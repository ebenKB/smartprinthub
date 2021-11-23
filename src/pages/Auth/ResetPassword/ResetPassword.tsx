/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Input, Button, Form, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RoundContentWrapper from 'components/RoundContentWrapper/RoundContentWrapper';
import Logo from 'images/smartprintlogo.png';
import { useForm } from 'react-hook-form';
import ErrorLabel from 'components/ErrorLabel/ErrorLabel';

const ResetPassword = () => {
  const {handleSubmit,} = useForm();

  const onSubmit = () => {
    console.log("we want to submit the form");
  }

  return (
	<div className="signup-container">
		<div className="mini container center text-center">
			<img src={Logo} alt="logo" className="medium fluid logo" />
		</div>
		<RoundContentWrapper
			isRounded
			hasDivider={false}
			heading=""
			classes="mini container center opaque"
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className="m-t-20">
					<Input
            type="password" 
            name="password"
            placeholder="Enter new password" 
            fluid 
            className="with-caption"
            error
          />
          <ErrorLabel error="password is too short" />
				</div>
				<div className="m-t-20">
					<Input
            type="password" 
            name="password-confirm" 
            placeholder="Confirm your password" 
            fluid 
            className="with-caption"
            error
          />
          <ErrorLabel error="passwords mismatch" />
				</div>
				<div className="m-t-20">
					<Button
            content="Reset password" 
            positive fluid size="large"
          />
				</div>
			</Form>
      <div className="m-t-20 sm-caption">
        Go back to &nbsp;
        <span>
          <Link to="/signin">
            Signin
          </Link>
        </span>
			</div>
		</RoundContentWrapper>
	</div>
  );
};

export default ResetPassword;
