import React, { lazy } from 'react';

const Welcome = lazy(() => import('../pages/welcome/welcome'));

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <div>Home</div>,
  },
  {
    path: '/welcome',
    exact: true,
    main: () => <Welcome />,
  },
];

export default routes;
