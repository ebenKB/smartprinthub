import React, { useState } from 'react';
import { Button, Grid, Modal } from 'semantic-ui-react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import SearchInput from '../../../components/form-fields/search-input/search-input';
import CustomFilter from '../../../components/CustomFilter/CustomFilter';
import CustomerCompanyPreview from '../../../components/CustomerCompanyPreview/CustomerCompanyPreview';
import Divider from '../../../components/AppDivider/AppDivider';
import history from 'utils/history';
import { useSelector } from 'react-redux';
import { selectCompanies } from 'redux/slices/company';
import Tile from 'components/Tile/Tile';
import SearchAndFilterWrapper from 'components/SearchAndFilterWrapper/SearchAndFilterWrapper';
import styles from "./style.module.css";

const AddNewCompany = () => {
	const companies = useSelector(selectCompanies);
	const [canShowComapnyDetails, setCanShowCompanyDetails] = useState(false);
	const [selectedCompany, setSelectedCompany] = useState(null);
	
  const handleSearch = (text) => {
    console.log('This is the input that we want to search with', text);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
	<>
		<SearchAndFilterWrapper
			filterComponent={<div>Filter</div>}
		/>
		<AppMainContent
			mainClasses="very large container center"
			padTop
		>
			<div className={`m-t-40`}>
				<h2 className="bold m-b-20">Available companies</h2>
				
				{companies && companies.map((company) => (
					<div className={`m-t-20 ${styles.wrapper}`}>
						<Tile>
							<Grid>
								<Grid.Column width={12}>
									<h3>{company.name}</h3>
									<p>
										<div>{company.phone}</div>
										<div>{company.email}</div>
										<div>Accra New town</div>
									</p>
								</Grid.Column>
								<Grid.Column width={4}>
									<div className={`text-right ${styles.cta}`}>
										<Button
											// primary
											positive
											size="small"
											onClick={() => {setCanShowCompanyDetails(true); setSelectedCompany(company)}}
										>
											View
										</Button>
									</div>
								</Grid.Column>
							</Grid>
						</Tile>
					</div>
				))}
			</div>
			{/* <div className="m-t-50">
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
			</div> */}
			{canShowComapnyDetails && (
				<Modal open={canShowComapnyDetails} onClose={()=> setCanShowCompanyDetails(false)}>
					<div className="m-b-40">
						<CustomerCompanyPreview footer={(
							<div className="m-t-40 text-right">
								<div className="flex flex-inline">
									<Button 
										content="Close"
										size="small"
										onClick={()=> setCanShowCompanyDetails(false)}
									/>
									<Button content="Add Company" size="small" positive />
								</div>
							</div>
						)}
						companyID={selectedCompany._id}
						/>
					</div>
				</Modal>
			)}
			<div className="m-t-40 m-b-40 text-right">
				<Divider type="faint" classes="m-t-20 m-b-20" />
				<Button content="Go Back" className="transparent" onClick={goBack} />
			</div>
		</AppMainContent>
	</>
  );
};

export default AddNewCompany;
