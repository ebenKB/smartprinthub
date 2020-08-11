import React from 'react';
import { Divider } from 'semantic-ui-react';

const OrderSummary = () => (
	<section>
		<h3>Order Summary</h3>
		<p>Payment for Birthday cards and flyers</p>
		<div className="order-summary__item">
			<span>Total</span>
			<div className="flex-inline flex center">
				<span>GHC</span>
				<h3>50.00</h3>
			</div>
		</div>
		<div className="order-summary__item">
			<span>Transaction Fee</span>
			<div className="flex-inline flex center">
				<span>GHC</span>
				<h3>1.00</h3>
			</div>
		</div>
		<Divider />
		<div className="order-summary__item">
			<span>Gross Total</span>
			<div className="flex-inline flex center">
				<span>GHC</span>
				<h2>51.00</h2>
			</div>
		</div>
	</section>
);

export default OrderSummary;
