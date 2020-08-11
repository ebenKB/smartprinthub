import React, { lazy } from 'react';

const CreateJob = lazy(() => import('../pages/customer/create-job/create-job'));
const ViewJobs = lazy(() => import('../pages/customer/jobs/view-jobs/view-jobs'));
const ShowJob = lazy(() => import('../pages/customer/jobs/show/show-job'));
const UserSettings = lazy(() => import('../pages/customer/settings/settings'));
const Checkout = lazy(() => import('../pages/customer/checkout/checkout'));
const Welcome = lazy(() => import('../pages/welcome/welcome'));
const ConfirmCheckout = lazy(() => import('../pages/customer/ConfirmCheckout/ConfirmCheckout'));

const routes = [
  {
    path: '/job/create',
    exact: true,
    main: () => <CreateJob />,
  },
  {
    path: '/jobs',
    exact: true,
    main: () => <ViewJobs />,
  },
  {
    path: '/jobs/view/:id',
    exact: true,
    main: () => <ShowJob />,
  },
  {
    path: '/user/settings',
    exact: true,
    main: () => <UserSettings />,
  },
  {
    path: '/job/checkout',
    exact: true,
    main: () => <Checkout />,
  },
  {
    path: '/job/checkout/confirm',
    exact: true,
    main: () => <ConfirmCheckout />,
  },
  {
    path: '/welcome',
    exact: true,
    main: () => <Welcome />,
  },
];

export default routes;
