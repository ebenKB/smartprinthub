import React from 'react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import GraphItems from '../../../components/GraphItems/GraphItems';
import Doughnut from '../../../components/graphs/doughnut/doughnut';
import GraphItem from '../../../components/graph-item/graph-item';
import CaptionWithBorder from '../../../components/CaptionWithBorder/CaptionWithBorder';

const CustomerHomePage = () => (
	<div>
		<CaptionWithBorder
			caption="Job Statistics in the last 30 days"
			classes="p-l-30 p-r-30"
		/>
		<AppMainContent
			parentClasses="opaque background app-pad"
			mainClasses="very large container center"
		>
			<GraphItems>
				<GraphItem
					title="Jobs Requiring Attention"
					subtitle=""
				>
					<Doughnut
						className="graph-continer"
						data={
            [
              { label: 'Requiring Attention', value: 14 },
            ]
          }
						title="Some chart data here"
						colors={['rgba(225,173,1, 0.85)', '#70ccd1']}
					/>
				</GraphItem>
				<GraphItem
					title="Total Jobs Completed"
					subtitle=""
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
					subtitle=""
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
					title="Total Jobs Ordered"
					subtitle=""
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
			</GraphItems>
		</AppMainContent>
	</div>
);

export default CustomerHomePage;
