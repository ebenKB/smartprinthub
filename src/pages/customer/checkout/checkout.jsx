/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React from 'react';
import './checkout.scss';
import {
  Button, Form, Radio,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { ValidatorForm } from 'react-form-validator-core';
import { connect } from 'react-redux';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import AppContentWrapper from '../../../components/app-content-wrapper/app-content-wrapper';
import FormGroup from '../../../components/form-group/form-group';
import { ReactComponent as MomoIcon } from '../../../svg/bank.svg';
import OrderSummary from '../../../components/OrderSummary/OrderSummary';
import PreviewJobs from '../../../components/PreviewJobs/PreviewJobs';
import appSettings from '../../../app/mockdata/appsettings';
import PaystackCheckout from '../../../components/PaystackCheckout/PaystackCheckout';
import ToastNotification from '../../../components/ToastNotification/ToastNotificaton';
// import ProcessingPayment from '../../../components/ProcessingPayment/ProcessingPayment';


class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      paymentOption: 'momo',
      phone: '',
      provider: '',
      loading: false,
      paymentStatus: true,
      ProviderCodes: {
        '054': 'mtn',
        '055': 'mtn',
        '024': 'mtn',
        '059': 'mtn',
        '027': 'tigo',
        '057': 'tigo',
        '026': 'tigo',
        '056': 'tigo',
        '020': 'vodafone',
        '050': 'vodafone',
      },
      options: {
        canPreviewJob: false,
      },
      notification: {
        message: null,
        type: null,
      },
    };
  }

  handlePaymentOptionChange = (e, data) => {
    const { value } = data;
    this.setState((state) => ({
      ...state,
      paymentOption: value,
    }));
  }

  handleProviderChange = (e, data) => {
    const { value } = data;
    this.setState((state) => ({
      ...state,
      provider: value,
    }));
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState((state) => ({
      ...state,
      phone: value,
      provider: '',
    }));
    if (value.length === 10) {
      const { ProviderCodes } = this.state;
      const prefix = value.substring(0, 3);
      this.setState((state) => ({
        ...state,
        provider: ProviderCodes[prefix],
      }));
    }
  }

  completePayment = async (reference) => {
    this.setState((state) => ({
      ...state,
      loading: false,
    }));
    if (reference.message === 'Approved') {
      const { history } = this.props;
      const { location: { pathname } } = history;
      history.push(`${pathname}/confirm`);
    }
  };

  closePayment = () => {
    this.setState((state) => ({
      ...state,
      notification: {
        type: 'error',
        message: 'Sorry! payment could not be completed',
      },
    }));
  };

  toggleJobPreview = () => {
    this.setState((state) => ({
      ...state,
      options: {
        ...state.options,
        canPreviewJob: !state.options.canPreviewJob,
      },
    }));
  }

  getTotalJobCost = () => {
    const { jobDrafts, currentJob } = this.props;
    const initialValue = 0;
    if (jobDrafts) {
      const val = [
        ...jobDrafts, currentJob].reduce((accum, x) => (accum + x.totalCost), initialValue);
      return val;
    }
    return currentJob.totalCost;
  };

  getTransactionFee = () => appSettings.jobChargeRate * this.getTotalJobCost();


  render() {
    const {
      phone,
      provider,
      paymentOption,
      options,
      notification,
    } = this.state;
    const { message, type } = notification;
    const { canPreviewJob } = options;
    const { jobDratfs, currentJob } = this.props;
    const ServiceProviders = [
      {
        key: '1',
        text: 'MTN',
        value: 'mtn',
      },
      {
        key: '2',
        text: 'Airtle/Tigo',
        value: 'tigo',
      },
      {
        key: '3',
        text: 'Vodafone',
        value: 'vodafone',
      },
    ];
    return (
	<AppMainContent
		parentClasses="app-pad"
	>
		{canPreviewJob && (
			<PreviewJobs closeAction={this.toggleJobPreview} />
		)}
		{message && type && (
			<ToastNotification type={type} message={message} />
		)}
		<div className="checkout-content__wrapper">
			<AppContentWrapper
				heading="Payment Details"
			>
				<ValidatorForm
					ref={this.myRef}
					onSubmit={() => {}}
					className="ui form"
				>
					<div className="checkout-container">
						<Form.Field>
							<Radio
								label="Mobile Money"
								name="paymentOption"
								value="momo"
								checked={paymentOption === 'momo'}
								onChange={this.handlePaymentOptionChange}
							/>
						</Form.Field>
						<Form.Field>
							<Radio
								label="Credit/Debit Card"
								name="paymentOption"
								value="card"
								checked={paymentOption === 'card'}
								onChange={this.handlePaymentOptionChange}
							/>
						</Form.Field>
						<div className="wrapper">
							<div className="fluid text-center">
								<div>
									<MomoIcon className="big icon" />
								</div>
							</div>
							<div className="m-b-20 m-t-40">
								<FormGroup
									classes=""
									center
									type="text"
									label="Phone number"
									name="phone"
									value={phone}
									placeholder="Enter Phone number"
									onChange={this.handleInputChange}
									inline
								/>
							</div>
							<div className="m-b-20">
								<FormGroup
									center
									type="dropdown"
									label="Service Provider"
									placeholder="Select a service provider"
									options={ServiceProviders}
									onChange={this.handleProviderChange}
									inline
									value={provider}
								/>
							</div>
						</div>
					</div>
					<div className="m-t-20 text-right flex flex-center checkout-btns">
						<Link to="/app/job/create">
							<Button
								size="small"
								content="Cancel"
							/>
						</Link>
						<Button
							size="small"
							content="Preview Job"
							onClick={this.toggleJobPreview}
						/>
						{/* <Button
							positive
							size="small"
							content="Pay And Send Job"
							onClick={this.completePayment}
							loading={loading}
						/> */}
						<PaystackCheckout
							handleSuccess={this.completePayment}
							handleClose={this.closePayment}
							options={{
							  amount: this.getTotalJobCost(),
							  email: 'customer@example.com',
							  phone: 'xxxxxxxxxx',
							  }}
						/>
					</div>
				</ValidatorForm>
			</AppContentWrapper>
			<OrderSummary
				totalCost={this.getTotalJobCost()}
				fee={this.getTransactionFee()}
				jobs={[...jobDratfs, currentJob]}
				grossTotalCost={this.getTotalJobCost() + this.getTransactionFee()}
			/>
		</div>
	</AppMainContent>
    );
  }
}

const mapStateToProps = (state) => ({
  jobDratfs: state.job.jobDrafts,
  currentJob: state.job.currentJob,
});


export default connect(mapStateToProps, null)(withRouter(Checkout));
