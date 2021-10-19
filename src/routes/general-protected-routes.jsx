import React, { lazy } from 'react';
import Home from '../pages/Home/Home';

const Welcome = lazy(() => import('../pages/customer/CustomerWelcomePage/CustomerWelcomePage'));

const routes = [
  {
    path: '/app',
    exact: true,
    main: () => <Home />,
    title: 'Dashboard',
  },
  {
    path: '/app/welcome',
    exact: true,
    main: () => <Welcome />,
    title: 'Welcome',
  },
];

export default routes;
