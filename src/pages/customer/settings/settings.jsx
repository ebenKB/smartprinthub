import React from 'react';
import './settings.scss';
import { Button } from 'semantic-ui-react';
import RoundContentWrapper from '../../../components/round-content-wrapper/round-content-wrapper';

const Settings = () => (
	<div>
		<div className="heading" />
		<div className="user-details__caption">
			<h1>Ebenezer Boafo Adjei</h1>
			<p>Joined on 17th June, 2020</p>
		</div>
		<div className="settings-container">
			<section className="m-t-40">
				<h2>Profile</h2>
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
			<RoundContentWrapper
				heading="Compnanies Added"
			>
				something here
			</RoundContentWrapper>
		</div>
	</div>
);

export default Settings;
