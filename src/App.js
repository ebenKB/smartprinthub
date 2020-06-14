/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import SignIn from './components/signin/signin';
import Home from './pages/Home/home';
import Checkout from './pages/checkout/checkout';
import ViewJobs from './pages/jobs/view/view-jobs';

function App() {
  return (
	<div className="light-theme">
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
				<Route path="/jobs/view">
					<ViewJobs />
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
