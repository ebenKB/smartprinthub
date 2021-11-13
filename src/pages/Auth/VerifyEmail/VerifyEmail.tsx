/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Input, Button, Form, Label, Message } from 'semantic-ui-react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';
import Logo from '../../../images/smartprintlogo.png';
import { useForm } from 'react-hook-form';
import ErrorLabel from '../../../components/ErrorLabel/ErrorLabel';
import "./verifyEmail.css";
import { Card } from '@material-ui/core';
import history from 'utils/history';

const ResetPassword = () => {

  const params = new URLSearchParams(useLocation().search);
  const token= params.get("token");
  // const history = useHistory();
  const [submitting, setSubmitting] = useState(false);

  console.log(token)

  const handleSubmit = () => {
    console.log("we want to submit the form");
    setSubmitting(true);
    setTimeout(() => {
      history.push("/");
    }, 2000)
  }

  return (
	<div className="p-t-80">
		<div className="mini container center text-center">
			<img src={Logo} alt="logo" className="medium fluid logo" />
		</div>
    <div className="text-center m-t-40 verify-email_wrapper ">
      <Card className="m-t-40 vCard">
        <h3>
          Thank you for creating an account with us.
          Please verify you email to complete your registration.
        </h3>
        <div className="m-t-20">
          <Button
            content="Verify Email" 
            positive  size="large"
            onClick={handleSubmit}
            loading={submitting}
          />
        </div>
      </Card>
    </div>
	</div>
  );
};

export default ResetPassword;
