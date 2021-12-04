import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AppMainContent from 'components/app-main-content/app-main-content';
import { ReactComponent as CheckIcon } from '../../../svg/check.svg';
import './ConfirmCheckout.scss';
import { removeAllJobDrafts } from 'redux/slices/jobDrafts';
import { resetCurrentJob } from 'redux/slices/job';
import { clearSelectedCompany } from 'redux/slices/company';

const ConfirmCheckout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// Jobs are done processing so clear jobs and default values
		dispatch(removeAllJobDrafts());
		dispatch(resetCurrentJob());
		dispatch(clearSelectedCompany());
	}, []);

	return (
		<AppMainContent
		parentClasses="app-pad"
	>
		<div className="text-center checkout__wrapper">
			<CheckIcon className="big icon" />
			<div className="caption-item">
				<h1>Job sent</h1>
				<h3>Your job has been submitted for printing.</h3>
			</div>
		</div>
		<div className="m-t-20 text-center">
			<Link to="/jobs">
				Click here to view your jobs
			</Link>
		</div>
	</AppMainContent>
	)
}

export default ConfirmCheckout;
