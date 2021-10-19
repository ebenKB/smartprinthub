/* eslint-disable no-self-compare */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import Layout from '../layout/layout';
import { selectAuthentication, selectAccountType } from '../../redux/slices/user';
import AppHeaderContext from '../../context/AppHeaderContext';
import AppLoader from '../AppLoader/AppLoader';

const LayoutRoute = ({
  component: Component, owner, title="", ...rest
}) => {
  const accountType = useSelector(selectAccountType);
  const isAuth = useSelector(selectAuthentication);

  return (
	<Route
		{...rest}
		render={(matchProps) => (
		  (/*((owner === accountType) || (owner === 'general')) &&*/ isAuth) ? (
			<Suspense fallback={<Layout><AppLoader /></Layout>}>
				<AppHeaderContext.Provider value={title}>
					<Layout>
						<Component {...matchProps} />
					</Layout>
				</AppHeaderContext.Provider>
			</Suspense>
		  ) : (
			<Redirect to="/hubkbs/signin" />
		  )
		)}
	/>
  );
};

LayoutRoute.propTypes = {
  component: PropTypes.element.isRequired,
  owner: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default LayoutRoute;
