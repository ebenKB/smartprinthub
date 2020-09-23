import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import SearchInput from '../../../components/form-fields/search-input/search-input';
import CustomFilter from '../../../components/CustomFilter/CustomFilter';
import CustomerCompanyPreview from '../../../components/CustomerCompanyPreview/CustomerCompanyPreview';
import Divider from '../../../components/Divider/Divider';

const AddNewCompany = () => {
  const history = useHistory();
  const handleSearch = (text) => {
    console.log('This is the input that we want to search with', text);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
	<AppMainContent
		mainClasses="medium container center"
		padTop
	>
		<div className="m-t-50">
			<h3 className="bold">Only companies you add to your profile can print jobs for you.</h3>
		</div>
		<div className="m-t-50">
			<div className="flex flex-inline center space-outs full-width">
				<div className="m-r-20">
					<CustomFilter text="Filter">
						content
					</CustomFilter>
				</div>
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
		</div>
		<div className="m-t-40 m-b-40">
			<CustomerCompanyPreview footer={(
				<div className="m-t-40 text-right">
					<div className="flex flex-inline">
						<Button content="Add Company" size="small" positive />
					</div>
				</div>
			)}
			/>
		</div>
		<div className="m-t-40 m-b-40 text-right">
			<Divider type="faint" classes="m-t-20 m-b-20" />
			<Button content="Go Back" className="transparent" onClick={goBack} />
		</div>
	</AppMainContent>
  );
};

export default AddNewCompany;
