import React, { useState, useEffect, useCallback } from 'react';
import './floating-company-directory.scss';
import { Button, Radio } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import { ReactComponent as CloseIcon } from 'svg/close.svg';
import ListItemWrapper from '../ListItemWrapper/ListItemWrapper';
import { findObjectByKey } from 'utils/app.ts';
import { saveComapnies, selectCompanies } from 'redux/slices/company';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationType } from 'enums/NotificationType.enum';
import { setNotification } from 'redux/slices/app';
import LinearProgress from 'components/LinearProgress/LinearProgress';
import { getpreferredCompanies } from 'apiService/customer';

const CompanyDirectory = ({ handleCloseAction, handleAction }) => {
	const dispatch = useDispatch();
	const companies = useSelector(selectCompanies);
  const [selectedCompany, setSelectedCompany] = useState('');
	const [progress, setProgress] = useState(null);

  const handleCompanyOptionChange = (e, data) => {
    const { value } = data;
    setSelectedCompany(value);
  };

  const setCompany = () => {
    const selected = findObjectByKey('name', selectedCompany, companies);
    handleAction(selected);
    handleCloseAction();
  };
	
	const loadCompanies = useCallback(async () => {
		try {
			const response = await getpreferredCompanies((progress)=> setProgress(progress));
			dispatch(saveComapnies(response.data.preferredCompanies))
		} catch (error) {
			dispatch(setNotification({type: NotificationType.ERROR, message: "Error fetching companies"}));
		}
	}, [dispatch])

	useEffect(() => {
		loadCompanies();
	}, [loadCompanies])

  return (
	<div className="company-directory__wrapper">
		<LinearProgress progressEvent={progress}/>
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
