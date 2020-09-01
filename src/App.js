/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

// import SignIn from './components/signin/signin';
// import Checkout from './pages/customer/checkout/checkout';
// import ViewJobs from './pages/customer/jobs/view-jobs/view-jobs';
// import Welcome from './pages/welcome/welcome';
// import ShowJob from './pages/customer/jobs/show/show-job';
// import UserSetings from './pages/customer/settings/settings';

import ProtectedRoutes from './routes/protected-routes';
import DefaultRoutes from './routes/default-routes';
import Layout from './components/layout/layout';

function App() {
  return (
	<div className="light-theme">
		<Router>
			<Layout>
				<Switch>
					{/* <Route exact path="/">
					<Welcome />
				</Route>
				<Route exact path="/job/:id">
					<ShowJob />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
				<Route path="/jobs/view">
					<ViewJobs />
				</Route>
				<Route path="/user/profile">
					<UserSetings />
				</Route>
				<Route path="/signin">
					<SignIn />
				</Route> */}
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

					{ProtectedRoutes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
						>
							<Suspense fallback={null}>
								<route.main />
							</Suspense>
						</Route>
					))}
					<Redirect exact from="/user/settings" to="/user/settings/profile" />
					{/* <Route path="*">
						<h1>No match found</h1>
					</Route> */}

				</Switch>
			</Layout>
		</Router>
	</div>
  );
}

export default App;
