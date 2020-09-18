import React from 'react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';

const ShowCompanyDetails = () => (
	<AppMainContent padTop mainClasses="small container center opaque">
		<RoundContentWrapper
			classes="opaque background app-pad"
			isRounded
			hasDivider={false}
		>
			<div>
				<h3>Martin and Sons</h3>
			</div>
		</RoundContentWrapper>
	</AppMainContent>
);

export default ShowCompanyDetails;
