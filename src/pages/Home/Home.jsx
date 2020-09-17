import React from 'react';
import { useSelector } from 'react-redux';
import { selectAccountType } from '../../redux/slices/user';
import CompanyHomePage from '../company/CompanyHomePage/CompanyHomePage';
import CustomerHomePage from '../customer/CustomerHomePage/CustomerHomePage';

const Home = () => {
  const accountType = useSelector(selectAccountType);

  return (
	<div>
		{accountType === 'company' && (<CompanyHomePage />)}
		{accountType === 'user' && (<CustomerHomePage />)}
	</div>
  );
};

export default Home;
