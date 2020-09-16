import React from 'react';
import { format } from 'date-fns';
import GraphItem from '../../../components/graph-item/graph-item';
import Doughnut from '../../../components/graphs/doughnut/doughnut';
import './CompanyHomePage.scss';
import BarChart from '../../../components/graphs/barchart/barchart';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import PayoutStatistics from '../PayoutStatistics/PayoutStatistics';
import CaptionWithBorder from '../../../components/CaptionWithBorder/CaptionWithBorder';
import SampleTransactions from '../../../app/mockdata/transactions';

const CompanyHomePage = () => (
	<AppMainContent
		hasAside
		aside={<PayoutStatistics />}
		padTop={false}
		mainClasses="background opaque"
	>
		<div className="very large opaque background m-b-40">
			<CaptionWithBorder
				classes="p-l-40"
				caption="Last 30 Days"
			/>
			<div className="app-pad">
				<div className="payment-chart__wrapper">
					<BarChart
						data={SampleTransactions.map((t) => ({ value: t.value, label: format(new Date(t.date), 'E do MMM') }))}
						title="Revenue"
						color="rgba(34, 139, 34, 0.2)"
					/>
				</div>
				<div className="flex job-graph__grid m-t-40">
					<GraphItem
						title="Total Jobs Pending"
						subtitle="Jobs received in the last 30 days"
					>
						<Doughnut
							className="graph-continer"
							data={
            [
              { label: 'Jobs Pending', value: 54 },
            ]
          }
							title="Some chart data here"
							colors={['rgba(6, 102, 208, 0.25)', '#70ccd1']}
						/>
					</GraphItem>
					<GraphItem
						title="Jobs Printed"
						subtitle="Jobs printed in the last 30 days"
					>
						<Doughnut
							className="graph-continer"
							data={
            [
              { label: 'Jobs Printed', value: 24 },
            ]
          }
							title="Some chart data here"
							colors={['rgba(3, 180, 71, 0.25)', '#70ccd1']}
						/>
					</GraphItem>
					<GraphItem
						title="Total Jobs Rejected"
						subtitle="Jobs Rejected in the last 30 days"
					>
						<Doughnut
							className="graph-continer"
							data={
            [
              { label: 'Jobs Rejected', value: 4 },
            ]
          }
							title="Some chart data here"
							colors={['rgba(222, 113, 99, 85)', '#70ccd1']}
						/>
					</GraphItem>
					<GraphItem
						title="Total Jobs Received"
						subtitle="Jobs received in the last 30 days"
					>
						<Doughnut
							className="graph-continer"
							data={
            [
              { label: 'Jobs Received', value: 54 },
            ]
          }
							title="Some chart data here"
							colors={['grey', '#70ccd1']}
						/>
					</GraphItem>
				</div>
			</div>
		</div>
	</AppMainContent>
);

export default CompanyHomePage;
