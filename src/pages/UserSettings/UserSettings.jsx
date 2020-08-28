import React from 'react';
import { Button } from 'semantic-ui-react';
import RoundContentWrapper from '../../components/round-content-wrapper/round-content-wrapper';
import './UserSettings.scss';

const UserProfile = () => (
	<div>
		<div className="large container user-settings__container m-b-40">
			<RoundContentWrapper
				heading="Personal Profile"
			>
				<section className="m-t-10">
					<p>Name: Define editable form group component</p>
					<p>Email: </p>
					<p>Password</p>
					<div className="m-t-20">
						<Button
							size="tiny"
							content="Edit settings"
						/>
					</div>
				</section>
			</RoundContentWrapper>
			<section className="m-t-40">
				<RoundContentWrapper
					heading="Compnanies Added"
				>
					something here
				</RoundContentWrapper>
			</section>
			<section className="m-t-40">
				<h2>Danger zone</h2>
				<p>Irreversible and descructive action</p>
				<RoundContentWrapper
					heading="Delete  account"
				>
					<div className="m-t-20">
						<Button
							negative
							size="tiny"
							content="Delete account"
						/>
					</div>
				</RoundContentWrapper>
			</section>
		</div>
	</div>
);

export default UserProfile;
