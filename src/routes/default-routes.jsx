import React, { lazy } from 'react';

const SignIn = lazy(() => import('../components/signin/signin'));


const defaultRoutes = [
  {
    path: '/signin',
    exact: true,
    main: () => <SignIn />,
  },
];

export default defaultRoutes;
