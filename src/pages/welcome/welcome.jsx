import React from 'react';
import { useSelector } from 'react-redux';
import { selectAccountType } from '../../redux/slices/app';
import CompanyWelcomePage from '../company/CompanyWelcomePage/CompanyWelcomePage';
import CustomerWelcomePage from '../customer/CustomerWelcomePage/CustomerWelcomePage';

const Welcome = () => {
  const accountType = useSelector(selectAccountType);

  return (
	<div>
		{accountType === 'company' && <CompanyWelcomePage />}
		{accountType === 'user' && <CustomerWelcomePage />}
	</div>
  );
};

export default Welcome;
