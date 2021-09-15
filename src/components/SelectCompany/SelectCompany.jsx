import React, { useEffect } from 'react';
import { Dropdown, Checkbox, Button } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import AppWrapperLite from '../app-wrapper-lite/app-wrapper-lite';
import { ReactComponent as ForwardArrow } from '../../svg/forward-arrow.svg';
import allCompanies from '../../app/mockdata/companies';
import { findObjectByKey } from '../../utils/app';
import { getAllCompanies } from 'apiService/company';
import { useDispatch, useSelector } from 'react-redux';
import { saveComapnies, selectCompanies } from 'redux/slices/company';
import { setNotification } from 'redux/slices/app';
import { NotificationType } from 'enums/NotificationType.enum';

const SelectCompany = ({ handleAction, setCompany }) => {
	const dispatch = useDispatch();
	const companies = useSelector(selectCompanies)

  const handleCompanyDetailsChange = (e, data) => {
    const { value } = data;
    setCompany(findObjectByKey('name', value, allCompanies));
  };

	const loadCompanies = async() => {
		try {
			const response = await getAllCompanies();
			dispatch(saveComapnies(response.data))
		} catch (error) {
			dispatch(setNotification({type: NotificationType.ERROR, message: "Error fetching companies"}))
		}
	}

	useEffect(() => {
		loadCompanies();
	}, [])

  return (
	<AppWrapperLite
		classes="m-t-40 small-container"
	>
		<h3>Order new Job</h3>
		<div className="m-t-60">
			<div className="text-center">
				<h3>Select a company to print your job</h3>
			</div>
			<div className="m-t-20">
				<Dropdown
					selection
					search
					fluid
					placeholder="Choose Company"
					className="custom dark"
					options={companies.map((c) => ({ text: c.name, value: c.name, key: c.id }))}
					onChange={handleCompanyDetailsChange}
				/>
				<Checkbox label="Set this as my default company" size="tiny" className="m-t-10 custom" />
				<div className="m-t-80 sm-caption">You can change this in job settings</div>
				<div className="m-t-80">
					<Button
						content={(
							<span className="flex-inline">
								<span>Continue</span>
								<ForwardArrow className="icon icon-12 m-l-5" />
							</span>
						)}
						fluid
						positive
						className="flex center"
						onClick={handleAction}
					/>
				</div>
			</div>
		</div>
	</AppWrapperLite>
  );
};

SelectCompany.propTypes = {
  handleAction: PropTypes.func.isRequired,
  setCompany: PropTypes.func.isRequired,
};

export default SelectCompany;
