import React, { lazy } from 'react';
import Home from '../pages/Home/Home';

const Welcome = lazy(() => import('../pages/welcome/welcome'));

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
    title: 'Dashboard',
  },
  {
    path: '/welcome',
    exact: true,
    main: () => <Welcome />,
    title: 'Welcome',
  },
];

export default routes;
