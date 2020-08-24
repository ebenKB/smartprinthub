import React from 'react';
import { Link } from 'react-router-dom';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import { ReactComponent as CheckIcon } from '../../../svg/check.svg';
import './ConfirmCheckout.scss';

const ConfirmCheckout = () => (
	<AppMainContent>
		<div className="text-center checkout__wrapper">
			<CheckIcon className="big icon" />
			<div className="caption-item">
				<h1>Success</h1>
				<p>Your payment has been completed successfully.</p>
			</div>
			<h3>Your job has been submitted for printing.</h3>
			<h3>Your job tracking ID is #0909</h3>
		</div>
		<div className="m-t-20 text-center">
			<Link to="/jobs">
				Click here to view your jobs
			</Link>
		</div>
	</AppMainContent>
);

export default ConfirmCheckout;
