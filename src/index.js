/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './app/store';
import { Router } from "react-router-dom";
import history from "utils/history";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate
				loading={<div>Loading</div>}
				persistor={persistor}
			>
				<Router history={history}>
					<App />
				</Router>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
