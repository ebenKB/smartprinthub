import React, { useState } from 'react';
import { Form, Button, Divider, Grid } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import './signin.scss';
import { useDispatch } from 'react-redux';
import Input from './form-fields/input';
import logo from 'images/smartprintlogo.png';
import RoundContentWrapper from 'components/RoundContentWrapper/RoundContentWrapper';
import { authenticateUser } from '../../redux/slices/user';
import ToastNotificaton from 'components/ToastNotification/ToastNotificaton';
import ButtonWithFixedIcon from '../ButtonWithFixedIcon/ButtonWithFixedIcon';
import { ReactComponent as Google } from "images/google.svg"
import { ReactComponent as Facebook } from "images/facebook.svg"

const SignIn = () => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState({message: "", type: ""});
  const [user, setUser] = useState({ email: 'eakbo23@gmail.com', password: '1111' });
  const history = useHistory();

  const handleChange = (e: { preventDefault: () => void; target: { name: any; value: any; }; }) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((newUser) => ({
      ...newUser,
      [name]: value,
    }));

    // clear notifications
    setNotification({
			message: "",
			type: ""
		});
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (user.email === '' || user.password === '') {
      setNotification({ message: 'Colud not login user', type: 'error' });
    } else {
      dispatch(authenticateUser({
        email: 'example@email.com',
        password: '1212',
      }));
      history.push('/');
    }
  };

  return (
	<div className="signin-wrapper">
		<div className="mini container center text-center">
			<img src={logo} alt="logo" className="medium fluid logo" />
		</div>
		{notification.message !== "" && (
			<ToastNotificaton message={notification.message} type={notification.type} />
		)}
		<RoundContentWrapper
			isRounded
			hasDivider={false}
			heading=""
			classes="mini container center opaque"
		>
			<Form>
				<div className="form-item">
					<Input
						classes="with-caption fluid"
						placeholder="Enter email"
						type="text"
						name="email"
						value={user.email}
						handleChange={handleChange}
						// defaultValue="eakbo23@gmail.com"
					/>
				</div>
				<div className="form-item">
					<Input
						classes="with-caption fluid"
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
			<div className="sm-caption m-t-20">
				Dont have an account?&nbsp;
				<Link to="/signup">
					Signup
				</Link>
			</div>
			<Divider horizontal>or</Divider>
			<div className="m-t-40">
				<Grid>
					<Grid.Row>
						<ButtonWithFixedIcon
							classes="fluid"
							size="large"
							onClick={() => {}}
							icon={<Google className="icon medium"/>}
						>
							<span>Continue with Google</span>
						</ButtonWithFixedIcon>
					</Grid.Row>
					<Grid.Row>
						<ButtonWithFixedIcon
							classes="fluid"
							size="large"
							onClick={() => {}}
							icon={<Facebook className="icon medium"/>}
						>
							<span>Continue with Facebook</span>
						</ButtonWithFixedIcon>
					</Grid.Row>
				</Grid>
			</div>
		</RoundContentWrapper>
	</div>
  );
};

export default SignIn;
