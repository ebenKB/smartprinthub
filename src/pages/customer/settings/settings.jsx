import React from 'react';
import './settings.scss';
import { Button } from 'semantic-ui-react';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';

const Settings = () => (
	<div>
		<div className="heading" />
		<div className="user-details__caption">
			<h1>Ebenezer Boafo Adjei</h1>
			<p>Joined on 17th June, 2020</p>
		</div>
		<div className="settings-container m-b-40">
			<section className="m-t-40">
				<h2>Profile</h2>
				<p>Your personal profile and other information relating to your account</p>
			</section>
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

export default Settings;
