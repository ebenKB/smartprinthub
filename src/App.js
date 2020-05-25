/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import SignIn from './components/signin/signin';
import Home from './components/Home/home';

function App() {
  return (
	<div className="light-theme">
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
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
