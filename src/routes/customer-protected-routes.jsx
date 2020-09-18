import React, { lazy } from 'react';
import Transactions from '../pages/customer/Transactions/Transactions';
import AddNewCompany from '../pages/customer/AddNewCompany/AddNewCompany';
import Companies from '../pages/customer/AddNewCompany/Companies/Companies';

const CreateJob = lazy(() => import('../pages/customer/CreateJob/CreateJob'));
const ViewJobs = lazy(() => import('../pages/customer/jobs/ViewJobs/ViewJobs'));
const ShowJob = lazy(() => import('../pages/customer/jobs/show/show-job'));
const UserSettings = lazy(() => import('../pages/customer/settings/settings'));
const Settings = lazy(() => import('../pages/customer/CustomerSettingsTabpane/CustomerSettingsTabpane'));
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
    main: () => <CreateJob />,
    title: 'Create Job',
  },
  {
    path: '/jobs',
    main: () => <ViewJobs />,
    title: 'Jobs',
  },
  {
    path: '/jobs/view/:id',
    main: () => <ShowJob />,
    title: 'Job Details',
  },
  {
    path: '/user/settings/:page',
    main: () => <Settings />,
    title: 'Settings',
  },
  {
    path: '/user/settings/old',
    main: () => <UserSettings />,
  },
  {
    path: '/job/checkout',
    main: () => <Checkout />,
    title: 'Checkout',
  },
  {
    path: '/job/checkout/confirm',
    main: () => <ConfirmCheckout />,
    title: 'Confirm Checkout',
  },
  {
    path: '/user/transactions',
    main: () => <Transactions />,
    title: 'Transactions',
  },
  {
    path: '/companies',
    main: () => <Companies />,
    title: 'Companies',
  },
  {
    path: '/companies/new',
    main: () => <AddNewCompany />,
    title: 'Add Company',
  },
];

export default routes;
