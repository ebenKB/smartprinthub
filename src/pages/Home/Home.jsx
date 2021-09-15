import React from 'react';
import { useSelector } from 'react-redux';
import { UserAccountTypes } from '../../enums/AccountType.enum';
import { selectAccountType } from '../../redux/slices/user';
import CompanyHomePage from '../company/CompanyHomePage/CompanyHomePage';
import CustomerHomePage from '../customer/CustomerHomePage/CustomerHomePage';

const Home = () => {
  const accountType = useSelector(selectAccountType);

  return (
	<div>
		{accountType === 'company' && (<CompanyHomePage />)}
		{accountType === UserAccountTypes.CUSTOMER && (<CustomerHomePage />)}
	</div>
  );
};

export default Home;
