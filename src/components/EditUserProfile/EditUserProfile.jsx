/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';

const EditUserProfile = ({ user }) => {
  const handleInputChange = (e) => {
    console.log('The input has changed', e);
  };

  const handleSaveUpdate = () => {
    console.log('This is function to save the update');
  };

  return (
	<div className="m-t-20">
		<RoundContentWrapper
			heading="Personal Profile"
			classes="medium center opaque container m-t-40 m-b-40"
		>
			<section className="m-t-20">
				<Form>
					<Form.Group widths="equal">
						<Form.Input
							label="First name"
							type="text"
							placeholder="First name"
							value={user.firstname}
							name="firstname"
							onChange={(e) => handleInputChange(e)}
						/>
						<Form.Input
							label="Last name"
							type="text"
							placeholder="Last name"
							value={user.lastname}
							name="lastname"
							onChange={(e) => handleInputChange(e)}
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Input
							type="text"
							placeholder="Email"
							value={user.email}
							name="email"
							label="Email"
							onChange={(e) => handleInputChange(e)}
						/>
						<Form.Input
							type="text"
							placeholder="Phone"
							value={user.phone}
							name="phone"
							label="Phone"
							onChange={(e) => handleInputChange(e)}
						/>
					</Form.Group>
				</Form>
				<div className="m-t-20 text-right">
					<Button
						size="small"
						content="Save"
						positive
						onClick={handleSaveUpdate}
					/>
				</div>
			</section>
		</RoundContentWrapper>
	</div>
  );
};

EditUserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default EditUserProfile;
