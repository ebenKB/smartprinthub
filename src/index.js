/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './app/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate
				loading={<div>Loading</div>}
				persistor={persistor}
			>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
