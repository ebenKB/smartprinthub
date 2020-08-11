/* eslint-disable react/prop-types */
import React from 'react';
import './checkout.scss';
import {
  Button, Form, Radio,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { ValidatorForm } from 'react-form-validator-core';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import AppContentWrapper from '../../../components/app-content-wrapper/app-content-wrapper';
import FormGroup from '../../../components/form-group/form-group';
import { ReactComponent as MomoIcon } from '../../../svg/bank.svg';
import OrderSummary from '../../../components/OrderSummary/OrderSummary';

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

  completePayment = async () => {
    this.setState((state) => ({
      ...state,
      loading: true,
    }));
    const response = await fetch('https://api.paystack.co/charge', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: 'Bearer sk_test_8dd50ac866d13c77b22725bab98052d0625574d6',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'some@body.nice',
        firstname: 'Ebenezer',
        lastname: 'Adjei',
        amount: '7000',
        currency: 'GHS',
        metadata: {
          custom_fields: [
            {
              value: 'makurdi',
              display_name: 'Donation for',
              variable_name: 'donation_for',
            },
          ],
        },
        mobile_money: {
          phone: '0551234987',
          provider: 'mtn',
        },
      }),
    });
    let { data } = await response.json();
    const { reference } = data;

    console.log('The payment was successful', reference);
    const verifyResponse = await fetch(`https://api.paystack.co/charge/${reference}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: 'Bearer sk_test_8dd50ac866d13c77b22725bab98052d0625574d6',
        'Content-Type': 'application/json',
      },
    });
    data = await verifyResponse.json();
    const { status } = data.data;
    if (status === 'success') {
      this.setState((state) => ({
        ...state,
        loading: false,
      }));
      const { history } = this.props;
      const { location: { pathname } } = history;
      history.push(`${pathname}/confirm`);
    }
  };

  render() {
    const {
      phone,
      provider,
      loading,
      paymentOption,
    } = this.state;
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
	<AppMainContent>
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
					<div className="m-t-20 text-right flex-center">
						<Link to="/job/create">
							<Button
								size="small"
								content="Cancel"
							/>
						</Link>
						<Button
							size="small"
							content="Preview Job"
						/>
						<Button
							positive
							size="small"
							content="Pay And Send Job"
							onClick={this.completePayment}
							loading={loading}
						/>
					</div>
				</ValidatorForm>
			</AppContentWrapper>
			<OrderSummary />
		</div>
	</AppMainContent>
    );
  }
}

export default withRouter(Checkout);
