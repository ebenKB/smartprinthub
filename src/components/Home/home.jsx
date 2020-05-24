import React from 'react';
import Layout from '../layout/layout';
import AppMainContent from '../app-main-content/app-main-content';

const Home = () => (
	<div>
		<Layout>
			<AppMainContent
				heading="New Job"
			>
				<p>-- this is the content --</p>
			</AppMainContent>
		</Layout>
	</div>
);

export default Home;
