import React, { useState } from 'react';
import { Form, Button, Divider, Grid } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import './signin.scss';
import { useDispatch } from 'react-redux';
import logo from 'images/smartprintlogo.png';
import RoundContentWrapper from 'components/RoundContentWrapper/RoundContentWrapper';
import { saveAuthenticateUser } from 'redux/slices/user';
import SocialAuth from 'components/SocialAuth/SocialAuth';
import { login } from 'apiService/auth';
import { useForm } from 'react-hook-form';
import {InputWithValidation} from 'components/InputWithValidation/InputWithValidation';
import { NotificationType } from 'enums/NotificationType.enum';
import { setNotification } from 'redux/slices/app';
import history from 'utils/history';
import { getErrorMessage } from 'utils/app';

const SignIn = () => {
  const dispatch = useDispatch();
	const {handleSubmit, control, formState: { errors, isSubmitting, }} = useForm({ mode: "onBlur", });

  const onSubmit = async (user:{ username: string, password: string}) => {
		try {
			if (user.username === '' || user.password === '') {
				dispatch(setNotification({ message: 'Colud not login user', type: 'error' }));
			} else {
				const response = await login(user);
				dispatch(saveAuthenticateUser(response.data));
				if (history.location.pathname==="/") {
					history.push('/');
				} else {
					history.goBack();
				}
			}
		} catch (error) {
			dispatch(setNotification({
				type: NotificationType.ERROR, 
				message: getErrorMessage(error.response)
			}))
		}
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
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-item">
					<InputWithValidation
						type="text"
						classes="with-caption fluid"
						placeholder="Enter username"
						name="username"
						control={control}
						validationRules={
							{
								required: { value: true, message: "Username is required"},
								minLength: {value: 3, message: "Username is too Short"},
								maxLength: {value: 32, message: "Username is too long"},
							}}
						error={errors.username ? true : false}
						errorMessage={errors.username ? errors.username.message : ""}
					/>
				</div>
				<div className="form-item">
					<InputWithValidation
						type="password"
						classes="with-caption fluid"
						placeholder="Enter password"
						name="password"
						control={control}
						validationRules={
							{
								required: {value: true, message: "Password is required"},
								minLength: {value: 3, message: "Password is too Short"},
								maxLength: {value: 32, message: "Password is too long"},
							}}
						error={errors.password ? true : false}
						errorMessage={errors.password ? errors.password.message : ""}
					/>
				</div>
				<div className="m-t-10">
					<Button
						color="green"
						className="fluid"
						size="large"
						content="Login"
						type="submit"
						loading={isSubmitting}
						disabled={isSubmitting}
					/>
				</div>
			</Form>
			<Grid>
				<Grid.Row>
					<Grid.Column width={8}>
						<div className="sm-caption m-t-20">
							Don't have an account?&nbsp;
							<Link to="/signup">
								Signup
							</Link>
						</div>
					</Grid.Column>
					<Grid.Column width={8}>
						<div className="sm-caption m-t-20 text-right">
							<Link to="/reset-password">
								Forgot password
							</Link>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Divider horizontal>or</Divider>
			<SocialAuth />
		</RoundContentWrapper>
	</div>
  );
};

export default SignIn;
