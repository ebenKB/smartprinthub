import React from 'react';
import { Button } from 'semantic-ui-react';
import CaptionWithBorder from '../../../components/CaptionWithBorder/CaptionWithBorder';

const PayoutStatistics = () => (
	<div>
		<CaptionWithBorder caption="Payout Statistics" />
		<div className="m-t-20">
			<span className="big text">GHS100.90</span>
			<div className="sm-caption app-primary">Pending payouts</div>
		</div>
		<div className="m-t-20">
			<span className="big text">GHS200.90</span>
			<div className="sm-caption app-primary">Total payouts</div>
		</div>
		<div className="m-t-20">
			<p className="xsm-caption">
				The report should give a list of all payouts and the dates that the payments were made.
			</p>
			<Button content="Generate Report" positive size="small" />
		</div>
	</div>
);

export default PayoutStatistics;
