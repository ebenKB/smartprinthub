import React from 'react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import SearchInput from '../../../components/form-fields/search-input/search-input';

const AddNewCompany = () => {
  const handleSearch = (text) => {
    console.log('This is the input that we want to search with', text);
  };

  return (
	<AppMainContent
		mainClasses="medium container center"
		padTop
	>
		<div className="m-t-50">
			<h2 className="bold">Only companies you add to your profile can print jobs for you.</h2>
		</div>
		<div className="m-t-50 text-center">
			<SearchInput
				fluid
				size="large"
				placeholder="Enter company number or name to search"
				handleSearch={handleSearch}
			>
				<ul>
					<li>Search option - 1</li>
					<li>Search option - 2</li>
					<li>Search option - 3</li>
					<li>Search option - 4</li>
				</ul>
			</SearchInput>
		</div>
	</AppMainContent>
  );
};

export default AddNewCompany;
