/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Layout from '../layout/layout';


const LayoutRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    console.log('These are the rest of the props', Component, rest);
  }, []);
  return (
	<Route
		{...rest}
		render={(matchProps) => (
			<Suspense fallback={<Layout>loading</Layout>}>
				<Layout>
					<Component {...matchProps} />
				</Layout>
			</Suspense>
		)}
	/>
  );
};

LayoutRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default LayoutRoute;
