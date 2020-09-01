/* eslint-disable no-self-compare */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Layout from '../layout/layout';


const LayoutRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    console.log('Rendering...');
  }, []);
  return (
	<Route
		{...rest}
		render={(matchProps) => (
		  (1 === 1) ? (
			<Suspense fallback={<Layout>loading</Layout>}>
				<Layout>
					<Component {...matchProps} />
				</Layout>
			</Suspense>
		  ) : (
			<Redirect to="/signin" />
		  )
		)}
	/>
  );
};

LayoutRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default LayoutRoute;
