import React from 'react';
import CaptionWithBorder from '../../../components/CaptionWithBorder/CaptionWithBorder';

const PayoutStatistics = () => (
	<div>
		<CaptionWithBorder caption="Payout Statistics" />
		<div className="m-t-10">
			<span className="big text">GHS200.90</span>
			<div className="xsm-caption">Total payouts</div>
		</div>
	</div>
);

export default PayoutStatistics;
