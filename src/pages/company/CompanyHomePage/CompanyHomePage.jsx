import React from 'react';
import GraphItem from '../../../components/graph-item/graph-item';
import Doughnut from '../../../components/graphs/doughnut/doughnut';
import Divider from '../../../components/divider/divider';
import './CompanyHomePage.scss';

const CompanyHomePage = () => (
	<div className="m-t-20 very large center container">
		<h2>Bar graph is here</h2>
		<p className="m-t-40">
			Show a statistics of the jobs here
		</p>
		<Divider title="Job statistics" type="thick" />
		<div className="flex job-graph__grid">
			<div className="m-t-40">
				<GraphItem
					title="Total Jobs Pending"
					subtitle="Jobs pending since 30 days"
				>
					<Doughnut
						className="graph-continer"
						data={
            [
              { label: 'Jobs Pending', value: 24 },
            ]
          }
						title="Some chart data here"
						colors={['#0666d0', '#70ccd1']}
					/>
				</GraphItem>
			</div>
			<div className="m-t-40">
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
						colors={['#03b447', '#70ccd1']}
					/>
				</GraphItem>
			</div>
			<div className="m-t-40">
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
						colors={['#de7163', '#70ccd1']}
					/>
				</GraphItem>
			</div>
			<div className="m-t-40">
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
);

export default CompanyHomePage;
