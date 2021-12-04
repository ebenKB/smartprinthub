/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';
import AppMainContent from 'components/app-main-content/app-main-content';
import AppContentWrapper from 'components/app-content-wrapper/app-content-wrapper';
import OrderSummary from 'components/OrderSummary/OrderSummary';
import appSettings from 'app/mockdata/appsettings';
import User from 'app/mockdata/user';
import './PaystackCheckout.scss';
import PreviewJobs from 'components/PreviewJobs/PreviewJobs';
import history from 'utils/history';
import { setNotification } from 'redux/slices/app';
import { createMultipleJobs, retryFailedJob } from '../CreateJob/CreateJob.service';
import AppProgressIndicator from 'components/AppProgressIndicator/AppProgressIndicator';
import ConfirmJobCheckout from 'components/ConfirmJobCheckkout/ConfirmJobCheckout';
import { createTransaction } from 'apiService/transaction';

const PaystackCheckout = ({ jobDrafts, currentJob, userID }) => {
  const PAYMENT_GATEWAY = "paystack";
  const dispatch = useDispatch();

  const [canPreviewJob, setCanPreviewJob] = useState(false);
  const [processingJob, setProcessingJob] = useState(false);
  const [canConfirmJobPayment, setCanConfirmJobPayment] = useState(false);

  const getTransactionFee = () => parseFloat(
    (appSettings.jobChargeRate * getTotalJobCost()).toFixed(2),
  );

  const completePayment = async (paymentResponse) => {
    if (paymentResponse.message === 'Approved') {
      setProcessingJob(true);
      const { location: { pathname } } = history;
      let completed = 0;
      let retries = 0;

      try {
        // LOG transaction to the api here
        const transResponse = await createTransaction({
          amount: getTotalJobCost(),
          reference: paymentResponse.reference,
          status: paymentResponse.status,
          user: userID,
        });

        const transaction = transResponse.data;
        if (transaction) {
          // SEND job to api
          const responses = await createMultipleJobs([...jobDrafts, currentJob], transaction._id);
          /**
           * Check the reponse to see if any of the jobs failed while processing.
           * If any job fails, retry processing that job.
           * If retyring processing a job fails, move the job to failed jobs.
           * If all jobs have been processed or retried, transition from to the confirmation page.
           */
          for(const response of responses) {
            if (response.status === 201) {
              completed += 1;

              if ((completed + retries) === responses.length) {
                history.push(`${pathname}/confirm?completed=${completed}&total=${responses.length}`);
              }
            } else {
              // retry failed jobs
              retryFailedJob(response.failedJob, transaction._id, (res) => {
                retries += 1;
                if (res.error) { /**move job to failed jobs */}

                if ((completed + retries) === responses.length) {
                  history.push(`${pathname}/confirm?completed=${completed}&total=${responses.length}`);
                }
              });
            }
          }
        }
      } catch (error) {
        console.log("Error", error);
        setProcessingJob(false);
      }
    }
  };

  const computeGrossTotal = () => {
    const total = (parseFloat(getTotalJobCost()) + parseFloat(getTransactionFee()));
    return total.toFixed(2);
  };

  const getTotalJobCost = () => {
		if (!currentJob) return 0.0;

		const total = [...jobDrafts, currentJob].reduce((accum, current) => accum + parseFloat(current.costPayable), 0);
    return total;
	}

  const closePayment = () => {
    dispatch(setNotification({
      type: 'error',
      message: 'Sorry! Your payment was not completed',
    }))
  };

  const goBack = () => {
    history.goBack();
  };

  const { email, phone } = User;

  return (
	<div className="paystack-checkout__wrapper">
      {processingJob && (
        <Modal open size="mini">
          <AppProgressIndicator message="Processing job" />
        </Modal>
      )}
      <ConfirmJobCheckout 
        handleConfirmAction={(ref) => completePayment(ref)}
        handleCancelAction={() => setCanConfirmJobPayment(false)}
        handlePaymentActionClose={closePayment}
        options={{
          email,
          phone,
          amount: getTotalJobCost(),
        }}
        open={canConfirmJobPayment}
        jobs={[...jobDrafts, currentJob]}
      />
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
            totalCost={getTotalJobCost()}
            fee={getTransactionFee()}
            jobs={[...jobDrafts, currentJob]}
            grossTotalCost={computeGrossTotal()}
          />
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
            {/* dynamically render different checkout options here  */}
            {PAYMENT_GATEWAY === "paystack" && (
              // <PaystackCheckoutComponent
              //   handleSuccess={completePayment}
              //   handleClose={closePayment}
              //   options={{
              //     amount: getTotalJobCost(),
              //     email,
              //     phone,
              //   }}
              // />
            <Button
              positive
              size="small"
              content="Continue to Payment"
              onClick={() => setCanConfirmJobPayment(true)}
            />
            )}
          </div>
        </AppContentWrapper>
      </AppMainContent>
	</div>
  );
};

const mapStateToProps = (state) => ({
  jobDrafts: state.jobDrafts,
  currentJob: state.job.currentJob,
  userID: state.user._id,
});

PaystackCheckout.propTypes = {
  jobDrafts: PropTypes.array.isRequired,
  currentJob: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(PaystackCheckout);
