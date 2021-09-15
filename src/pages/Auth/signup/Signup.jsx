/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Signup.scss';
import { Input, Button, Form, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';
import Logo from '../../../images/smartprintlogo.png';
import SocialAuth from '../../../components/SocialAuth/SocialAuth';
import { InputWithValidation } from '../../../components/InputWithValidation/InputWithValidation';
import { useForm } from 'react-hook-form';

const Signup = () => {
	const {handleSubmit, control, formState: { errors, isSubmitting,}} = useForm({mode: "onBlur"});

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
			<Form>
				<div className="m-t-20 form-item">
					<InputWithValidation
						type="email"
						classes="with-caption fluid"
						placeholder="Enter Email"
						name="email"
						control={control}
						defaultValue={""}
						validationRules={
							{
								required: { value: true, message: "Email is required"},
								minLength: {value: 3, message: "Email is too Short"},
								maxLength: {value: 32, message: "Email is too long"},
							}}
						error={errors.email ? true : false}
						errorMessage={errors.email ? errors.email.message : ""}
					/>
				</div>
				<div className="m-t-20">
					<InputWithValidation
						type="text"
						classes="with-caption fluid"
						placeholder="Enter username"
						name="username"
						control={control}
						defaultValue={""}
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
				<div className="m-t-20">
					<InputWithValidation
						type="text"
						classes="with-caption fluid"
						placeholder="Enter Phone"
						name="phone"
						control={control}
						defaultValue={""}
						validationRules={
							{
								required: { value: true, message: "Phone is required"},
								minLength: {value: 3, message: "Phone is too Short"},
								maxLength: {value: 32, message: "Phone is too long"},
							}}
						error={errors.phone ? true : false}
						errorMessage={errors.phone ? errors.phone.message : ""}
					/>
				</div>
				<div className="m-t-20">
					<InputWithValidation
						type="password"
						classes="with-caption fluid"
						placeholder="Enter password"
						name="password"
						control={control}
						defaultValue={""}
						validationRules={
							{
								required: { value: true, message: "Password is required"},
								minLength: {value: 3, message: "Password is too Short"},
								maxLength: {value: 32, message: "Password is too long"},
							}}
						error={errors.password ? true : false}
						errorMessage={errors.password ? errors.password.message : ""}
					/>
				</div>
				<div className="m-t-20">
					<InputWithValidation
						type="password"
						classes="with-caption fluid"
						placeholder="Confirm your password"
						name="password-confirm"
						control={control}
						defaultValue={""}
						validationRules={
							{
								required: { value: true, message: "Confirmation password is required"},
								minLength: {value: 3, message: "Confirmation password is too Short"},
								maxLength: {value: 32, message: "Confirmation password is too long"},
							}}
						error={errors["password-confirm"] ? true : false}
						errorMessage={errors["password-confirm"] ? errors["password-confirm"].message : ""}
					/>
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
			<Divider horizontal>or</Divider>
			<SocialAuth />

		</RoundContentWrapper>
	</div>
  );
};

export default Signup;
