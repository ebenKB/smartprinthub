import React, { useEffect, useState } from 'react';
import { getCompanyDetails } from 'apiService/company';
import AppWrapperLite from 'components/app-wrapper-lite/app-wrapper-lite';
import Divider from 'components/AppDivider/AppDivider';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { setNotification } from 'redux/slices/app';
import { NotificationType } from 'enums/NotificationType.enum';
import { getErrorMessage } from 'utils/app';

interface CompanyDetails {
	name: "",
	phone: "",
	email: "",
	companyInformation: {
		landmark: "",
		address: "",
		digitalAddress: "",
	}
}
const CompanyDetailsCard  = ({ companyID }: { companyID: string}) => {
	const dispatch = useDispatch();
  const [loadingCompany, setLoadingCompany] = useState(false);
  const [company, setCompany] = useState<CompanyDetails>();

  const loadCompanyDetails = async () => {
		try {
			const response = await getCompanyDetails(companyID);
			console.log("response is here", response);
			setLoadingCompany(false);
      setCompany(response.data);
		} catch (error) {
			setLoadingCompany(false);
			dispatch(setNotification({
				type: NotificationType.ERROR,
				message: getErrorMessage(error.response)
			}))
		}
	}

	useEffect(() => {
		if (loadingCompany) {
			loadCompanyDetails();
		}
	}, [loadingCompany]);

  return (
		<AppWrapperLite>
			<Divider
				title="Company Details"
				type="faint"
			/>
			{company && (
				<div className="m-t-20">
					<div className="bold">{company.name}</div>
					<div>{company.email}</div>
					<div>{company.companyInformation?.address}</div>
					<div>{company.companyInformation?.digitalAddress}</div>
					<div>{company.companyInformation?.landmark}</div>
					<div className="bold app-primary">{company.phone}</div>
				</div>
			)}
			<div className="m-t-20">
				<div className="flex reverse">
					<Button
						content="View Assigned Company" 
						size="small" 
						primary  
						loading={loadingCompany}
						disabled={loadingCompany}
						onClick={() => setLoadingCompany(true)}
					/>
				</div>
			</div>
		</AppWrapperLite>
  )
}

export default CompanyDetailsCard;