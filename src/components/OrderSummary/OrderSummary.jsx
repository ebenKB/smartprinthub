/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Divider, Table } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import './OrderSummary.scss';
import { PaperSizeType } from 'enums/PaperSizeType.enum';

const OrderSummary = ({
  jobs, totalCost, grossTotalCost, fee,
}) => {

	const getTotalJobCost = () => {
		if (!jobs) return 0.0;

		return jobs.reduce((accum, current) => accum + parseFloat(current.totalCost), 0);
	}

	const getJobSize = (job) => {
		if (job.paperSizeType === PaperSizeType.DEFAULT) {
			return job.defaultSize.name.toUpperCase();
		}
		return `${job.width}x${job.height} ${job.unit}`
	}

	const getUnitcost = (job) => {
		if (job.paperSizeType === PaperSizeType.DEFAULT) {
			return job.defaultSize.unitCost;
		} else {
			return job.selectedJobType.unitCost
		}
	}

	return (
		<>
		<h3>Order Summary</h3>
		<div className="order-summary__item item-caption m-b-10">
			<span className="bold">
				{jobs && jobs.length}
				<span>&nbsp;</span>
				<span>Job(s)</span>
			</span>
		</div>
		<Table celled>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Job Title</Table.HeaderCell>
					<Table.HeaderCell>Job Type</Table.HeaderCell>
					<Table.HeaderCell>Size</Table.HeaderCell>
					<Table.HeaderCell>Quantity</Table.HeaderCell>
					<Table.HeaderCell>Unit Cost</Table.HeaderCell>
					<Table.HeaderCell>Total Cost(GHS)</Table.HeaderCell>
					<Table.HeaderCell>Others</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
	
			<Table.Body>
				{jobs && jobs.map((job) => (
					<Table.Row>
						<Table.Cell>{job.title}</Table.Cell>
						<Table.Cell>{job.selectedJobType.paperType.name.toUpperCase()}({job.selectedJobType.paperType.commonName})</Table.Cell>
						<Table.Cell>{getJobSize(job)}</Table.Cell>
						<Table.Cell textAlign="center">{job.quantity}</Table.Cell>
						<Table.Cell textAlign="center">{getUnitcost(job)}</Table.Cell>
						<Table.Cell textAlign="right">{job.totalCost}</Table.Cell>
						<Table.Cell textAlign="right">0.00</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
		<section>
			{/* <div className="order-summary__item">
				{jobs && jobs.map((job, idx) => (
					<div key={idx} className="item-caption">
						<span>{job.title.substring(0, 31)}</span>
						<div className="flex-inline flex center">
							<span>GHC</span>
							<h3>{job.totalCost}</h3>
						</div>
					</div>
				))}
			</div> */}
			{/* <div className="order-summary__item item-caption">
				<span className="bold">Subtotal</span>
				<div className="flex-inline flex center m-t-10">
					<span>GHC</span>
					<h3>{totalCost}</h3>
				</div>
			</div> */}
			<div className="order-summary__item item-caption m-t-40">
				<span>Total Job Cost</span>
				<div className="flex-inline flex center ">
					<span>GHC</span>
					<h3>{getTotalJobCost()}</h3>
				</div>
			</div>
			<div className="order-summary__item item-caption m-t-20">
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
		</>
	)
};

OrderSummary.propTypes = {
  jobs: PropTypes.array.isRequired,
  totalCost: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  grossTotalCost: PropTypes.number.isRequired,
};

export default OrderSummary;
