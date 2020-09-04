/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import GeneralProtectedRouted from './routes/general-protected-routes';
import ProtectedUserRoutes from './routes/customer-protected-routes';
import DefaultRoutes from './routes/default-routes';
import ProtectedCompanyRoutes from './routes/company-protected-routes';
import LayoutRoute from './components/LayoutRoute/LayoutRoute';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
	<div className="light-theme">
		<Router>
			<Switch>
				{DefaultRoutes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
					>
						<Suspense fallback={<h3>Loading</h3>}>
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
					/>
				))}
				{ProtectedCompanyRoutes.map((route, index) => (
					<LayoutRoute
						key={index}
						component={route.main}
						path={route.path}
						exact
						owner="company"
					/>
				))}
				{ProtectedUserRoutes.map((route, index) => (
					<LayoutRoute
						key={index}
						component={route.main}
						path={route.path}
						exact
						owner="user"
					/>
				))}
				<Redirect from="/user/settings" strict exact to="/user/settings/profile" />
				<Redirect from="/company/settings" strict exact to="/company/settings/profile" />
				<Route path="*">
					{/* <Redirect to="/" /> */}
					<PageNotFound />
				</Route>
			</Switch>
		</Router>
	</div>
  );
}

export default App;
