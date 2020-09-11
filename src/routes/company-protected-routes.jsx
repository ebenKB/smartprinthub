import React, { lazy } from 'react';
import CompanySettingsTab from '../pages/company/CompanySettingsTabpane/CompanySettingsTabpane';
import EditPayoutAccount from '../pages/company/EditPayoutAccount/EditPayoutAccount';
import ViewJobs from '../pages/company/ViewsJobs/ViewJobs';
import ShowJobDetails from '../pages/company/ShowJobDetails/ShowJobDetails';

const ViewTransactions = lazy(() => import('../pages/company/ViewTransactions/ViewTransactions'));

const routes = [
  {
    path: '/company/settings/:page',
    exact: true,
    main: () => <CompanySettingsTab />,
    title: 'Settings',
  },
  {
    path: '/company/settings/payout/edit',
    main: () => <EditPayoutAccount />,
    title: 'Payout',
  },
  {
    path: '/company/jobs',
    main: () => <ViewJobs />,
    title: 'Jobs',
  },
  {
    path: '/company/transactions',
    main: () => <ViewTransactions />,
    title: 'Transactions',
  },
  {
    path: '/company/jobs/:id',
    main: () => <ShowJobDetails />,
    title: 'Job',
  },
];

export default routes;
