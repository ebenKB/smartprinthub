/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import AppContentWrapper from '../../../components/app-content-wrapper/app-content-wrapper';
import OrderSummary from '../../../components/OrderSummary/OrderSummary';
import appSettings from '../../../app/mockdata/appsettings';
import PaystackCheckoutComponent from '../../../components/PaystackCheckout/PaystackCheckout';
import User from '../../../app/mockdata/user';
import ToastNotification from '../../../components/ToastNotification/ToastNotificaton';
import './PaystackCheckout.scss';
import PreviewJobs from '../../../components/PreviewJobs/PreviewJobs';
import history from 'utils/history';

const PaystackCheckout = ({ jobDrafts, currentJob }) => {
  // const history = useHistory();
  const [notification, setNotification] = useState({
    message: null,
    type: null,
  });

  const [canPreviewJob, setCanPreviewJob] = useState(false);

  const computeTotalCost = () => {
    const initialValue = 0;
    if (jobDrafts) {
      const val = [
        ...jobDrafts, currentJob].reduce((accum, x) => (accum + parseFloat(x.totalCost)), initialValue);
      return val.toFixed(2);
    }
    return currentJob.totalCost;
  };

  const getTransactionFee = () => parseFloat(
    (appSettings.jobChargeRate * computeTotalCost()).toFixed(2),
  );

  const completePayment = (reference) => {
    if (reference.message === 'Approved') {
      const { location: { pathname } } = history;
      history.push(`${pathname}/confirm`);
    }
  };

  const computeGrossTotal = () => {
    const total = (parseFloat(computeTotalCost()) + parseFloat(getTransactionFee()));
    return total.toFixed(2);
  };

  const closePayment = () => {
    setNotification({
      type: 'error',
      message: 'Sorry! Your payment was not completed',
    });
  };

  const goBack = () => {
    history.goBack();
  };

  const { email, phone } = User;
  const { message, type } = notification;

  return (
	<div className="paystack-checkout__wrapper">
		{message && type && (
			<ToastNotification type={type} message={message} />
		)}
		<PreviewJobs
      jobs={
        [...jobDrafts.map((job) =>({
          id: job.uuid, title: job.title, file: job.file, cost: job.totalCost
        })), 
        { id: currentJob.uuid, title: currentJob.title, file: currentJob.file, cost: currentJob.totalCost }]
        }
        closeAction={() => setCanPreviewJob(!canPreviewJob)} 
        open={canPreviewJob}
      />
		<AppMainContent
			parentClasses="app-pad"
      hasAside={false}
		>
			<AppContentWrapper
				heading="Complete Payment"
			>
				<OrderSummary
					totalCost={computeTotalCost()}
					fee={getTransactionFee()}
					jobs={[...jobDrafts, currentJob]}
					grossTotalCost={computeGrossTotal()}
				/>
				<p className="sm-caption">If you are ready to send the job, click pay and follow the instructions</p>
				<div className="text-right m-t-40 flex flex-center checkout-btns">
					<Button
						size="small"
						content="Cancel"
						onClick={goBack}
					/>
					<Button
						size="small"
						content="Preview Job"
						onClick={() => setCanPreviewJob(true)}
					/>
					<PaystackCheckoutComponent
						handleSuccess={completePayment}
						handleClose={closePayment}
						options={{
					  amount: (computeGrossTotal() * 100),
					  email,
					  phone,
						}}
					/>
				</div>
			</AppContentWrapper>
		</AppMainContent>
	</div>
  );
};

const mapStateToProps = (state) => ({
  jobDrafts: state.jobDrafts,
  currentJob: state.job.currentJob,
});

PaystackCheckout.propTypes = {
  jobDrafts: PropTypes.array.isRequired,
  currentJob: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(PaystackCheckout);
