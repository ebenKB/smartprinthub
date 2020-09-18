import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';

const Companies = () => (
	<AppMainContent
		padTop
		parentClasses="medium container center app-pad"
	>
		<RoundContentWrapper
			classes="app-pad opaque background"
			heading="6 Companies added"
			isRounded
		>
			<div className="m-t-10">
				List all the companies here
			</div>
			<div className="text-right m-t-20">
				<Link to="/companies/new">
					<Button content="Add new" basic size="small" />
				</Link>
			</div>
		</RoundContentWrapper>
	</AppMainContent>
);

export default Companies;
