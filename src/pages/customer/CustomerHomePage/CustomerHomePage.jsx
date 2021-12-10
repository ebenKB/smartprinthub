import React, { useState, useEffect } from 'react';
import AppMainContent from 'components/app-main-content/app-main-content';
import GraphItems from 'components/GraphItems/GraphItems';
import Doughnut from 'components/graphs/doughnut/doughnut';
import GraphItem from 'components/graph-item/graph-item';
import CaptionWithBorder from 'components/CaptionWithBorder/CaptionWithBorder';
import { getJobStatistics } from 'apiService/job';
import { CircularProgress } from '@mui/material';

const CustomerHomePage = () => {
	const [statistics, setStatistics] = useState(null);
	const [loading, setLoading] = useState(false);

	const loadStatistics = async () => {
		try {
			setLoading(true);
			const response = await getJobStatistics();
			setStatistics(response.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	}

	useEffect(() => {
		loadStatistics();
	}, []);

	return (
		<div>
			<CaptionWithBorder
				caption="Job Statistics"
				classes="p-l-30 p-r-30"
			/>
			<AppMainContent
				parentClasses="opaque background app-pad"
				mainClasses="very large container center"
			>
				<div className="text-center m-t-40">{loading && <CircularProgress size={140} />}</div>
				<GraphItems>
					{statistics && (
						<GraphItem
							title="Jobs Requiring Attention"
							subtitle=""
						>
							<Doughnut
								className="graph-continer"
								data={
								[
									{ label: 'Requiring Attention', value: statistics.totalPending },
								]
							}
								title="Some chart data here"
								colors={['rgba(225,173,1, 0.85)', '#70ccd1']}
							/>
						</GraphItem>
					)}
					{statistics && (
						<GraphItem
							title="Total Jobs Completed"
							subtitle=""
						>
							<Doughnut
								className="graph-continer"
								data={
								[
									{ label: 'Jobs Printed', value: statistics.totalCompleted },
								]
							}
								title="Some chart data here"
								colors={['rgba(3, 180, 71, 0.25)', '#70ccd1']}
							/>
						</GraphItem>
					)}
					{statistics && (
						<GraphItem
							title="Total Jobs Rejected"
							subtitle=""
						>
							<Doughnut
								className="graph-continer"
								data={
								[
									{ label: 'Jobs Rejected', value: statistics.totalRejected },
								]
							}
								title="Some chart data here"
								colors={['rgba(222, 113, 99, 85)', '#70ccd1']}
							/>
						</GraphItem>
					)}
					{statistics && (
						<GraphItem
							title="Total Jobs Ordered"
							subtitle=""
						>
							<Doughnut
								className="graph-continer"
								data={
								[
									{ label: 'Jobs Received', value: statistics.allJobs },
								]
							}
								title="Some chart data here"
								colors={['grey', '#70ccd1']}
							/>
						</GraphItem>
					)}
				</GraphItems>
			</AppMainContent>
		</div>
	)
};

export default CustomerHomePage;
