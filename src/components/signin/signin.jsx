import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './signin.scss';
import Input from './form-fields/input';
import { useState } from 'react';

const SignIn = () => {
  const [user, setUser] = useState({email: '', password: ''})
  const handleChange =(e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setUser((user) => ({
      ...user,
      [name]:value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('We want to submit');
  }

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
            value={user.email}
            handleChange={handleChange}
          />
        </div>
        <Form>
        <div className="form-item">
          <Input
            classes="fluid"
            placeholder="Enter password"
            type="password"
            name="password"
            value={user.password}
            handleChange={handleChange}
          />
        </div>
        <div className="m-t-10">
          <Button 
            color="green" 
            className="fluid" 
            size="tiny"
            content="Login"
            onClick={handleSubmit}
          />
        </div>
        </Form>
      </div>
      <p className="m-t-10">Don't have an account?
        <Link to="/">
          &nbsp;Signup
        </Link>
      </p>
    </div>
  )
}

export default SignIn
