import React from 'react';
import './checkout.scss';
import { Button } from 'semantic-ui-react';
import Layout from '../../components/layout/layout';
import AppMainContent from '../../components/app-main-content/app-main-content';

const Checkout = () => (
	<Layout>
		<AppMainContent
			heading="Complete Payment"
		>
			<div className="checkout-container">
				<h1>Complete your payment here</h1>
				<h4>Amount: GHC 50</h4>
				<p>Select payment option</p>
				<p>Confirm payment</p>
				<p>Complete payment</p>
			</div>
			<div className="m-t-20 text-right flex-center">
				<Button
					size="small"
					content="Cancel"
				/>
				<Button
					positive
					size="small"
					content="Pay"
				/>
			</div>
		</AppMainContent>
	</Layout>
);

export default Checkout;
