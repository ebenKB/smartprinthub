import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import RoundContentWrapper from '../../components/RoundContentWrapper/RoundContentWrapper';

import './UserSettings.scss';
import CompanyLabel from '../../components/CompanyLabel/CompanyLabel';
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile';

const UserProfile = () => {
  // const handleSaveUpdate = () => {
  //   console.log('We want to save the updates');
  // };

  const [user] = useState({
    firstname: 'Ebenezer',
    lastname: 'Adjei',
    email: 'example@email.com',
    phone: '0245898987',
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  return (
	<div className="m-b-40">
		<EditUserProfile user={user} />
		<section className="m-t-40">
			<RoundContentWrapper
				heading="Compnanies Added"
				classes="medium center container opaque"
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
				classes="medium center container opaque"
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
