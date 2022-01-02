import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'semantic-ui-react';
import AppMainContent from 'components/app-main-content/app-main-content';
import history from 'utils/history';
import { useParams } from 'react-router';
import { getCompanyDetails } from 'apiService/company';
import RoundContentWrapper from 'components/RoundContentWrapper/RoundContentWrapper';
import ConfirmationModal from 'components/ConfirmationModal/ConfirmationModal';
import { removeCustomerCompanies } from 'apiService/customer';
import { useDispatch } from 'react-redux';
import { setAppProgress, setNotification } from 'redux/slices/app';
import { NotificationType } from 'enums/NotificationType.enum';

const ShowCompanyDetails = () => {
	const { id } = useParams();
	const [company, setCompany] = useState(null);
	const [canRemoveCompany, setCanRemoveCompany] = useState(false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const loadCompanyInformation = useCallback(async() => {
		try {
			const response = await getCompanyDetails(id, (progress)=> dispatch(setAppProgress(progress)));
			setCompany(response.data);
		} catch (error) {}
	}, [id, dispatch])

	const confirmRemoveCompany = async () => {
		try {
			setLoading(true);
			await removeCustomerCompanies([id]);
			setLoading(false);
			toggleRemoveCompany();
			dispatch(setNotification({type: NotificationType.SUCCESS, message: "Company has been removed"}));
		} catch (error) {
			setLoading(false);
			toggleRemoveCompany();
			dispatch(setNotification({type: NotificationType.ERROR, message: "Error removing company"}));
		}
	}

	const toggleRemoveCompany = () => {
		setCanRemoveCompany(!canRemoveCompany);
	}

  const goBack = () => {
    history.goBack();
  };

	useEffect(() => {
		loadCompanyInformation();
	}, [loadCompanyInformation])

  return (
	<>
		<ConfirmationModal
			size="tiny"
			confirmButtonText="Yes, continue"
			cancelButtonText="No, cancel"
			open={canRemoveCompany}
			heading={(
				`Remove ${company ? company.name : "Company"}`
			)}
			closeAction={toggleRemoveCompany}
			handleConfirmAction={confirmRemoveCompany}
			loading={loading}
		>
			<p>If you remove this company, you can no longer send them jobs for printing.</p>
			<h3>Are you sure you want to continue?</h3>
		</ConfirmationModal>
		<AppMainContent
			padTop
			mainClasses="very large container center opaque"
		>
			<RoundContentWrapper
				classes="m-t-50 huge container opaque center"
				heading="Company Details"
				isRounded
			>
				<div>
					<div className="m-t-20 m-b-10">
						<h2>{company ? company.name : ""}</h2>
					</div>
					<p>
						<div>{company ? company.phone : ""}</div>
						<div>{company ? company.email : ""}</div>
						<div>{company ? company.companyInformation.address : ""}</div>
						<div>{company ? company.companyInformation.digitalAddress : ""}</div>
						<div>{company ? company.companyInformation.landmark : ""}</div>
					</p>
				</div>
				<div className="m-t-30 flex flex-inline text-right">
					<div className="m-r-10">
						<Button
							content="Go Back"
							size="small"
							basic
							onClick={goBack}
						/>
					</div>
					<div>
						<Button
							content="Remove Company"
							size="small" negative
							onClick={toggleRemoveCompany}
						/>
					</div>
				</div>
			</RoundContentWrapper>
		</AppMainContent>
	</>
  );
};

export default ShowCompanyDetails;
