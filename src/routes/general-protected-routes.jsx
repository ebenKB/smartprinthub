import React, { lazy } from 'react';

const Welcome = lazy(() => import('../pages/welcome/welcome'));

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Welcome />,
  },
  {
    path: '/welcome',
    exact: true,
    main: () => <div>hello</div>,
  },
];

export default routes;
