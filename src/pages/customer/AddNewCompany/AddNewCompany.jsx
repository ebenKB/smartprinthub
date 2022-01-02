import React, { useState, useEffect, } from 'react';
import { Button, Grid, Modal } from 'semantic-ui-react';
import AppMainContent from 'components/app-main-content/app-main-content';
import CustomerCompanyPreview from 'components/CustomerCompanyPreview/CustomerCompanyPreview';
import Divider from 'components/AppDivider/AppDivider';
import history from 'utils/history';
import { useDispatch } from 'react-redux';
import Tile from 'components/Tile/Tile';
import SearchAndFilterWrapper from 'components/SearchAndFilterWrapper/SearchAndFilterWrapper';
import styles from "./style.module.css";
import { addUserCompany } from 'apiService/customer';
import { NotificationType } from 'enums/NotificationType.enum';
import { setNotification } from 'redux/slices/app';
import { getAvailableCompaniesForCustomer } from 'apiService/company';

const AddNewCompany = () => {
	const [companies, setCompanies] = useState([]);
	const [canShowComapnyDetails, setCanShowCompanyDetails] = useState(false);
	const [selectedCompany, setSelectedCompany] = useState(null);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

  // const handleSearch = (text) => {
  //   console.log('This is the input that we want to search with', text);
  // };

  const goBack = () => {
    history.goBack();
  };

	const getAvailableCompanies = async () => {
		try {
			const response = await getAvailableCompaniesForCustomer();
			setCompanies(response.data);
		} catch (error) {
			console.log("This is error", error);
		}
	}

	const addCompany = async () => {
		const company = selectedCompany;
		try {
			setLoading(true);
			const response = await addUserCompany({
				"preferredCompanies": [company._id]
			});
			setLoading(false);
			if (response.status === 200 || response.status === 201) {
				dispatch(setNotification({type: NotificationType.SUCCESS, message: "Company has been added"}));
				setCanShowCompanyDetails(false);
			}
		} catch (error) {
			setLoading(false);
			dispatch(setNotification({type: NotificationType.ERROR, message: "Error adding company"}));
		}
	}

	useEffect(() => {
		getAvailableCompanies();
	}, []);

  return (
	<>
		<SearchAndFilterWrapper
			filterComponent={<div>Filter</div>}
		/>
		<AppMainContent
			mainClasses="very large container center"
			padTop
		>
			<div className={`m-t-50`}>
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
									</p>
								</Grid.Column>
								<Grid.Column width={4}>
									<div className={`text-right ${styles.cta}`}>
										<Button
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
						<CustomerCompanyPreview
							handleConfirmAction={addCompany}
							handleCloseAction={() => setCanShowCompanyDetails(false)}
							companyID={selectedCompany._id}
							loading={loading}
							setNotification={(notif)=>dispatch(setNotification(notif))}
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
