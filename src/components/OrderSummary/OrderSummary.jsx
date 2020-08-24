/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Divider } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import './OrderSummary.scss';

const OrderSummary = ({
  jobs, totalCost, grossTotalCost, fee,
}) => (
	<section>
		<div className="order-summary__item item-caption m-b-10">
			<h3>Order Summary</h3>
			<span className="bold">
				<span>(</span>
				{jobs && jobs.length}
				<span>&nbsp;</span>
				<span>Jobs)</span>
			</span>
		</div>
		<div className="order-summary__item">
			{jobs && jobs.map((job, idx) => (
				<div key={idx} className="item-caption">
					<span>{job.title.substring(0, 31)}</span>
					<div className="flex-inline flex center">
						<span>GHC</span>
						<h3>{job.totalCost}</h3>
					</div>
				</div>
			))}
		</div>
		<div className="order-summary__item item-caption">
			<span className="bold">Subtotal</span>
			<div className="flex-inline flex center m-t-10">
				<span>GHC</span>
				<h3>{totalCost}</h3>
			</div>
		</div>
		<div className="order-summary__item item-caption m-t-10">
			<span>Transaction Fee</span>
			<div className="flex-inline flex center ">
				<span>GHC</span>
				<h3>{fee}</h3>
			</div>
		</div>
		<Divider />
		<div className="order-summary__item item-caption">
			<span className="bold">Gross Total</span>
			<div className="flex-inline flex center app-warning bold">
				<span>GHC</span>
				<h2>{grossTotalCost}</h2>
			</div>
		</div>
		<Divider />
	</section>
);

OrderSummary.propTypes = {
  jobs: PropTypes.array.isRequired,
  totalCost: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  grossTotalCost: PropTypes.number.isRequired,
};

export default OrderSummary;
