/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import SignIn from './components/signin/signin';
import Home from './pages/customer/create-job/create-job';
import Checkout from './pages/customer/checkout/checkout';
import ViewJobs from './pages/customer/jobs/view-jobs/view-jobs';
import Welcome from './pages/welcome/welcome';
import ShowJob from './pages/customer/jobs/show/show-job';
import UserSetings from './pages/customer/settings/settings';


function App() {
  return (
	<div className="light-theme">
		<Router>
			<Switch>
				<Route exact path="/">
					<Welcome />
				</Route>
				<Route exact path="/job/create">
					<Home />
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
				</Route>
			</Switch>
		</Router>
	</div>
  );
}

export default App;
