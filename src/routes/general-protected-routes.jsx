import React, { lazy } from 'react';

const Welcome = lazy(() => import('../pages/welcome/welcome'));

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Welcome />,
  },
];

export default routes;
