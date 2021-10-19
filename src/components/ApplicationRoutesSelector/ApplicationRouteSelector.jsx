import React from "react";
import GeneralProtectedRouted from '../../routes/general-protected-routes';
import ProtectedUserRoutes from '../../routes/customer-protected-routes';
import DefaultRoutes from '../../routes/default-routes';
import ProtectedCompanyRoutes from '../../routes/company-protected-routes';
import LayoutRoute from '../LayoutRoute/LayoutRoute';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import AppLoader from '../AppLoader/AppLoader';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

export const ApplicationRouteSelector = () => {
  return (
    <>
      {GeneralProtectedRouted.map((route, index) => (
        <LayoutRoute
          key={index}
          component={route.main}
          path={route.path}
          exact
          owner="general"
          title={route.title}
        />
      ))}
      {ProtectedCompanyRoutes.map((route, index) => (
        <LayoutRoute
          key={index}
          component={route.main}
          path={route.path}
          exact
          owner="company"
          title={route.title}
        />
      ))}
      {ProtectedUserRoutes.map((route, index) => (
        <LayoutRoute
          key={index}
          component={route.main}
          path={route.path}
          exact
          owner="user"
          title={route.title}
        />
      ))}
      <Switch>
      <Redirect from="/app/user/settings" strict exact to="/app/user/settings/profile" />
			<Redirect from="/app/company/settings" strict exact to="/app/company/settings/profile" />
      </Switch>
    </>
  )
}
