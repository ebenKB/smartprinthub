/* eslint-disable no-self-compare */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import Layout from '../layout/layout';
import { selectAccountType } from '../../redux/slices/app';
import { selectAuthentication } from '../../redux/slices/user';

const LayoutRoute = ({ component: Component, owner, ...rest }) => {
  const accountType = useSelector(selectAccountType);
  const isAuth = useSelector(selectAuthentication);

  return (
	<Route
		{...rest}
		render={(matchProps) => (
		  (((owner === accountType) || (owner === 'general')) && isAuth) ? (
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
  owner: PropTypes.string.isRequired,
};

export default LayoutRoute;
