import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './signin.scss';
import Input from './form-fields/input';
import logo from '../../images/smartprintlogo.png';


const SignIn = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('We want to submit');
  };

  return (
	<div className="signin-wrapper">
		<div className="bold sign-wrapper__logo-wrapper text-center m-t-20 m-b-20">
			<img src={logo} alt="logo" className="medium fluid logo" />
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
						size="small"
						content="Login"
						onClick={handleSubmit}
					/>
				</div>
			</Form>
		</div>
		<p className="m-t-20">
			Dont have an account?
			<Link to="/">
          &nbsp;Signup
			</Link>
		</p>
	</div>
  );
};

export default SignIn;
