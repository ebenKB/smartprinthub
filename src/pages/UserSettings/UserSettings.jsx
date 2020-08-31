import React, { useState } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import RoundContentWrapper from '../../components/round-content-wrapper/round-content-wrapper';

import './UserSettings.scss';
import CompanyLabel from '../../components/CompanyLabel/CompanyLabel';

const UserProfile = () => {
  const handleSaveUpdate = () => {
    console.log('We want to save the updates');
  };

  const [user, setUser] = useState({
    firstname: 'Ebenezer',
    lastname: 'Adjei',
    email: 'example@email.com',
    phone: '0245898987',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
	<div className="shadow-border medium center opaque container p-all-40 m-b-40">
		<RoundContentWrapper
			heading="Personal Profile"
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
		<section className="m-t-40">
			<RoundContentWrapper
				heading="Compnanies Added"
			>
				<div className="m-t-20">
					<p>You have added these companies to do your printing.</p>
					<CompanyLabel companyName="Shiny Colour World Limited" />
					<CompanyLabel companyName="Shiny Colour World Limited" />
					<CompanyLabel companyName="Shiny Colour World Limited" />
				</div>
			</RoundContentWrapper>
		</section>
		<section className="m-t-40">
			<RoundContentWrapper
				heading="Danger zone"
			>
				<div className="m-t-20">
					<p>This action is irreversible and descructive.</p>
					<div className="text-right">
						<Button
							negative
							size="small"
							content="Delete account"
						/>
					</div>
				</div>
			</RoundContentWrapper>
		</section>
	</div>
  );
};

export default UserProfile;
