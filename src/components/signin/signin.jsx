import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './signin.scss';
import Input from './form-fields/input';
import logo from '../../images/smartprintlogo.png';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';


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
		<div className="mini container center text-center">
			<img src={logo} alt="logo" className="medium fluid logo" />
		</div>

		<RoundContentWrapper
			isRounded
			hasDivider={false}
			heading=""
			classes="mini container center opaque"
		>
			<Form>
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
						size="large"
						content="Login"
						onClick={handleSubmit}
					/>
				</div>
			</Form>
			<div className="sm-caption m-t-10">
				Dont have an account?&nbsp;
				<Link to="/signup">
					Signup
				</Link>
			</div>
		</RoundContentWrapper>
	</div>
  );
};

export default SignIn;
