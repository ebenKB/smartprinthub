import React, { lazy } from 'react';
// import Test from '../pages/customer/create-job/create-job';

const CreateJob = lazy(() => import('../pages/customer/CreateJob/CreateJob'));
const ViewJobs = lazy(() => import('../pages/customer/jobs/ViewJobs/ViewJobs'));
const ShowJob = lazy(() => import('../pages/customer/jobs/show/show-job'));
const UserSettings = lazy(() => import('../pages/customer/settings/settings'));
const Settings = lazy(() => import('../pages/customer/CustomerSettingsTabpane/CustomerSettingsTabpane'));
// const Checkout = lazy(() => import('../pages/customer/checkout/checkout'));
const Checkout = lazy(() => import('../pages/customer/PaystackCheckout/PaystackCheckout'));
const ConfirmCheckout = lazy(() => import('../pages/customer/ConfirmCheckout/ConfirmCheckout'));

const routes = [
  {
    path: '/test',
    exact: true,
    main: () => <h1>This is a test component</h1>,
  },
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
    path: '/user/settings/:page',
    exact: true,
    main: () => <Settings />,
  },
  {
    path: '/user/settings/old',
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
];

export default routes;
