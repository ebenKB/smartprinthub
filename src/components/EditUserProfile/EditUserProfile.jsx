/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';
import InputValidatorHook from '../form-fields/InputValidatorHook/InputValidatorHook';

const EditUserProfile = ({ user }) => {
  const { control, errors, handleSubmit } = useForm();

  const handleInputChange = (e) => {
    console.log('The input has changed', e);
  };

  const handleSaveUpdate = (data) => {
    console.log('This is function to save the update', data);
  };

  const onError = (errs) => {
    console.log('There are errors in the form', errs);
  };

  return (
	<div className="m-t-20">
		<RoundContentWrapper
			heading="Personal Profile"
			classes="medium center opaque container m-t-40 m-b-40"
		>
			<section className="m-t-20">
				{errors && Object.entries(errors).map(([key, value]) => (
					<div key={key}>
						{value.message}
					</div>
				))}
				<Form onSubmit={handleSubmit(handleSaveUpdate, onError)}>
					<Form.Group widths="equal">
						<InputValidatorHook
							as={<Form.Input label="First name" type="text" />}
							placeholder="First name"
							name="firstname"
							defaultValue={user.firstname}
							control={control}
							error={errors.firstname?.message}
							rules={
                {
                  required: 'Firstname cannot be empty',
                  minLength: { value: 4, message: 'Firtname is too short' },
                  pattern: { value: /[A-Za-z]+/, message: 'Invalid name' },
                }
              }
						/>
						<InputValidatorHook
							as={<Form.Input label="Lastname" type="text" />}
							control={control}
							defaultValue={user.lastname}
							name="lastname"
							placeholder="Enter your lastname"
							error={errors.lastname?.message}
							rules={
                {
                  required: 'Lastname cannot be empty',
                  minLength: { value: 3, message: 'Lastname is too short' },
                  pattern: { value: /[A-Za-z]+/, message: 'Invalid name' },
                }
              }
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<InputValidatorHook
							as={<Form.Input label="Email" type="email" />}
							control={control}
							defaultValue={user.email}
							name="email"
							placeholder="Enter your email"
							error={errors.email?.message}
							rules={
                {
                  required: 'Email cannot be empty',
                  minLength: { value: 3, message: 'Email is too short' },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }
              }
						/>
						<InputValidatorHook
							as={<Form.Input label="Phone" type="phone" />}
							control={control}
							defaultValue={user.phone}
							name="phone"
							placeholder="Enter your phone"
							error={errors.phone?.message}
							rules={
                {
                  required: 'Phone cannot be empty',
                  minLength: { value: 10, message: 'Phone is too short' },
                }
              }
						/>
					</Form.Group>
					<div className="m-t-20 text-right">
						<Button
							size="small"
							content="Save"
							positive
						/>
					</div>
				</Form>
			</section>
		</RoundContentWrapper>
	</div>
  );
};

EditUserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default EditUserProfile;
