import React from 'react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import SearchInput from '../../../components/form-fields/search-input/search-input';

const AddNewCompany = () => (
	<AppMainContent
		mainClasses="medium container center"
		padTop
	>
		<div className="m-t-50 text-center">
			<SearchInput fluid size="large" placeholder="Enter company number or name to search" />
		</div>
	</AppMainContent>
);

export default AddNewCompany;
