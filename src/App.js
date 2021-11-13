/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React, { Suspense, useEffect } from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import GeneralProtectedRouted from './routes/general-protected-routes';
import ProtectedCustomerRoutes from './routes/customer-protected-routes';
import DefaultRoutes from './routes/default-routes';
import ProtectedCompanyRoutes from './routes/company-protected-routes';
import LayoutRoute from './components/LayoutRoute/LayoutRoute';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AppLoader from './components/AppLoader/AppLoader';
import { UserAccountTypes } from './enums/AccountType.enum';
import ToastNotificaton from 'components/ToastNotification/ToastNotificaton';
import { useSelector } from 'react-redux';
import { selectNotification } from 'redux/slices/app';
import history from 'utils/history';
import Axios from 'utils/axios';
import { selectAccessToken } from 'redux/slices/user';

function App() {
	const notification = useSelector(selectNotification);
	const access_token = useSelector(selectAccessToken);

	useEffect(() => {
		Axios.defaults.headers.common["Authorization"]=`Bearer ${access_token}`;
	}, []);

  return (
	<div className="light-theme">
		{notification && (
			<ToastNotificaton 
				message={notification.message} 
				type={notification.type}
				notificationID={notification.id}
			/>
		)}
		{/* <Router history={history}> */}
			<Switch>
				{DefaultRoutes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
					>
						<Suspense fallback={<AppLoader />}>
							<route.main />
						</Suspense>
					</Route>
				))}
				{GeneralProtectedRouted.map((route, index) => (
					<LayoutRoute
						key={index}
						component={route.main}
						path={route.path}
						exact
						owner="general"
						title={route.title}
					/>
				))}
				{ProtectedCompanyRoutes.map((route, index) => (
					<LayoutRoute
						key={index}
						component={route.main}
						path={route.path}
						exact
						owner="company"
						title={route.title}
					/>
				))}
				{ProtectedCustomerRoutes.map((route, index) => (
					<LayoutRoute
						key={index}
						component={route.main}
						path={route.path}
						exact
						owner={UserAccountTypes.CUSTOMER}
						title={route.title}
					/>
				))}
				<Redirect from="/user/settings" strict exact to="/user/settings/profile" />
				<Redirect from="/company/settings" strict exact to="/company/settings/profile" />
				<Route path="*">
					{/* <Redirect to="/" /> */}
					<PageNotFound />
				</Route>
			</Switch>
		{/* </Router> */}
	</div>
  );
}

export default App;
