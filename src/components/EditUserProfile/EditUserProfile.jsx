/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';
import InputValidatorHook from '../form-fields/InputValidatorHook/InputValidatorHook';
import ToastNotificaton from '../ToastNotification/ToastNotificaton';

const EditUserProfile = ({ user }) => {
  const [notification, setNotification] = useState(null);
  const { control, errors, handleSubmit } = useForm();

  const handleSaveUpdate = (data) => {
    console.log('We have clicked the submit', data);

    setNotification(null);
  };

  const onError = (errs) => {
    setNotification(null);
    if (Object.entries(errs).length > 0) {
      setNotification({
        type: 'error',
        message: 'Failed to save',
      });
    }
  };

  const getNotification = () => {
    if (notification) {
      return <ToastNotificaton message={notification.message} type={notification.type} />;
    }
    return null;
  };

  return (
	<div className="m-t-20">
		{notification && getNotification()}
		<RoundContentWrapper
			heading="Personal Profile"
			classes="medium center opaque container m-t-40 m-b-40"
		>
			<section className="m-t-20">
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
