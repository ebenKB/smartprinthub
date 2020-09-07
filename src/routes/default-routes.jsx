import React, { lazy } from 'react';
import Signup from '../pages/Auth/signup/Signup';

const SignIn = lazy(() => import('../components/signin/signin'));


const defaultRoutes = [
  {
    path: '/signin',
    exact: true,
    main: () => <SignIn />,
  },
  {
    path: '/signup',
    main: () => <Signup />,
  },
];

export default defaultRoutes;
