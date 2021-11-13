import React, { useState, useEffect } from 'react';
import './floating-company-directory.scss';
import { Button, Radio } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import { ReactComponent as CloseIcon } from '../../svg/close.svg';
import allcompanies from '../../app/mockdata/companies';
import ListItemWrapper from '../ListItemWrapper/ListItemWrapper';
import { findObjectByKey } from '../../utils/app.ts';
import { getAllCompanies } from 'apiService/company';
import { saveComapnies, selectCompanies } from 'redux/slices/company';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationType } from 'enums/NotificationType.enum';
import { setNotification } from 'redux/slices/app';

const CompanyDirectory = ({ handleCloseAction, handleAction }) => {
	const dispatch = useDispatch();
	const companies = useSelector(selectCompanies);
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleCompanyOptionChange = (e, data) => {
    const { value } = data;
    setSelectedCompany(value);
  };

  const setCompany = () => {
    const selected = findObjectByKey('name', selectedCompany, companies);
		console.log("Selected company", selectedCompany)
    handleAction(selected);
    handleCloseAction();
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
	<div className="company-directory__wrapper">
		<div className="content">
			<div className="company-directory__header flex center">
				<span className="bold">Company Directory</span>
				<span>
					<Button
						content={<CloseIcon className="medium icon" />}
						onClick={handleCloseAction}
						className="transparent"
					/>
				</span>
			</div>
			<div className="content__body">
				{companies.map((comp) => (
					<ListItemWrapper key={comp._id}>
						<Radio
							value={comp.name}
							label={comp.name}
							name="company"
							checked={selectedCompany === comp.name}
							onChange={handleCompanyOptionChange}
						/>
					</ListItemWrapper>
				))}
			</div>
		</div>
		<div className="footer">
			<Button
				fluid
				positive
				content="Assign company"
				onClick={setCompany}
			/>
		</div>
	</div>
  );
};


CompanyDirectory.propTypes = {
  handleCloseAction: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default CompanyDirectory;
