import React, { lazy } from 'react';
import ResetPassword from '../pages/Auth/ResetPassword/ResetPassword';
import Signup from '../pages/Auth/signup/Signup';
import VerifyEmail from "../pages/Auth/VerifyEmail/VerifyEmail"
const SignIn = lazy(() => import('../components/Signin/Signin'));


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
  {
    path: '/reset-password',
    main: () => <ResetPassword />
  },
  {
    path: '/verify-email',
    main: () => <VerifyEmail />
  }
];

export default defaultRoutes;
