import React from 'react';
import ExampleJob from '../../../components/ExampleJob/ExampleJob';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import AppContentWrapper from '../../../components/app-content-wrapper/app-content-wrapper';

const Welcome = () => (
	<AppMainContent
		hasAside
		parentClasses="app-pad"
	>
		<AppContentWrapper
			heading="Getting Started"
		>
			<ExampleJob />
			<h1>Hello!! you have some tasks pending</h1>
			<div>
				<h3>Things To Show Here</h3>
				<p>Getting Started Component like Highrise</p>
				<p>Link to create a new job</p>
				<p>Link to add new company to your account</p>
				<p>Have any question? Contact our help center</p>
			</div>
		</AppContentWrapper>
	</AppMainContent>
);

export default Welcome;
