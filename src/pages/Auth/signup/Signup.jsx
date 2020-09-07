/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Signup.scss';
import { Input, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';
import Logo from '../../../images/smartprintlogo.png';


const Signup = () => (
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
			<Form>
				{/* <div className="m-t-20">
					<Input type="text" placeholder="Enter your first name" fluid />
				</div>
				<div className="m-t-20">
					<Input type="text" placeholder="Enter your surname" fluid />
				</div> */}
				<div className="m-t-20">
					<Input type="email" placeholder="Enter your email" fluid />
				</div>
				<div className="m-t-20">
					<Input type="password" placeholder="Choose a password" fluid />
				</div>
				<div className="m-t-20">
					<Button content="Create my account" positive fluid size="large" />
				</div>
				<div className="m-t-10 sm-caption">
					Already have an account?&nbsp;
					<span>
						<Link to="/signin">
							Signin
						</Link>
					</span>
				</div>
			</Form>
		</RoundContentWrapper>
	</div>
);

export default Signup;
