import React, { lazy } from 'react';
import Transactions from '../pages/customer/Transactions/Transactions';
import AddNewCompany from '../pages/customer/AddNewCompany/AddNewCompany';
import Companies from '../pages/customer/Companies/Companies';
import ShowCompanyDetails from '../pages/customer/CustomerCompanyDetails/CustomerCompanyDetails';

const CreateJob = lazy(() => import('../pages/customer/CreateJob/CreateJob'));
const ViewJobs = lazy(() => import('../pages/customer/jobs/ViewJobs/ViewJobs'));
const ShowJob = lazy(() => import('../pages/customer/jobs/show/show-job'));
const UserSettings = lazy(() => import('../pages/customer/settings/settings'));
const Settings = lazy(() => import('../pages/customer/CustomerSettingsTabpane/CustomerSettingsTabpane'));
const Checkout = lazy(() => import('../pages/customer/PaystackCheckout/PaystackCheckout'));
const ConfirmCheckout = lazy(() => import('../pages/customer/ConfirmCheckout/ConfirmCheckout'));

const routes = [
  {
    path: '/app/test',
    exact: true,
    main: () => <h1>This is a test component</h1>,
  },
  {
    path: '/app/job/create',
    main: () => <CreateJob />,
    title: 'Create Job',
  },
  {
    path: '/app/jobs',
    main: () => <ViewJobs />,
    title: 'Jobs',
  },
  {
    path: '/app/jobs/view/:id',
    main: () => <ShowJob />,
    title: 'Job Details',
  },
  {
    path: '/app/user/settings/:page',
    main: () => <Settings />,
    title: 'Settings',
  },
  {
    path: '/app/user/settings/old',
    main: () => <UserSettings />,
  },
  {
    path: '/app/job/checkout',
    main: () => <Checkout />,
    title: 'Checkout',
  },
  {
    path: '/app/job/checkout/confirm',
    main: () => <ConfirmCheckout />,
    title: 'Confirm Checkout',
  },
  {
    path: '/app/user/transactions',
    main: () => <Transactions />,
    title: 'Transactions',
  },
  {
    path: '/app/companies',
    main: () => <Companies />,
    title: 'Companies',
  },
  {
    path: '/app/companies/new',
    main: () => <AddNewCompany />,
    title: 'Add Company',
  },
  {
    path: '/app/companies/:id',
    main: () => <ShowCompanyDetails />,
    title: 'Company',
  },
];

export default routes;
