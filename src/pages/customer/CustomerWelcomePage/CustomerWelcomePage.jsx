import React from 'react';
import AppMainContent from 'components/app-main-content/app-main-content';
import AppContentWrapper from 'components/app-content-wrapper/app-content-wrapper';
import { Checkbox } from 'semantic-ui-react';

const Welcome = () => (
	<AppMainContent
		hasAside
		parentClasses="app-pad"
	>
		<AppContentWrapper
			heading="Getting Started"
		>
			Good morning, welcome back.
			<p>You have 2 unread messages</p>
			<p>2 new jobs have been printed</p>
			<p>1 job needs attention</p>
			<h3>It doesn't look like there is something new</h3>
			<Checkbox  label={`Don't show this again`} />
		</AppContentWrapper>
	</AppMainContent>
);

export default Welcome;
