import React from 'react';
import { Button } from 'semantic-ui-react';
import './signin.scss';
import Input from './form-fields/input';

const SignIn = () => {
  return (
    <div className="signin-wrapper">
      <div className="sign-wrapper__logo-wrapper">
        Logo Here
      </div>
      <div className="sign-wrapper__content">
        <div className="form-item">
          <Input 
            classes="fluid"
            placeholder="Enter email"
            type="text"
            name="email"
            value=""
          />
        </div>
        <div className="form-item">
          <Input
            classes="fluid"
            placeholder="Enter password"
            type="password"
            name="password"
            value=""
          />
        </div>
        <div className="m-t-10">
          <Button color="green" content="Login" className="fluid" size="tiny" />
        </div>
      </div>
      <p className="m-t-10">Don't have an account? Signup</p>
    </div>
  )
}

export default SignIn
