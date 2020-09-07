import React from 'react';
import CompanySettingsTab from '../pages/company/CompanySettingsTabpane/CompanySettingsTabpane';
import EditPayoutAccount from '../pages/company/EditPayoutAccount/EditPayoutAccount';
import ViewJobs from '../pages/company/ViewsJobs/ViewJobs';

const routes = [
  {
    path: '/company/settings/:page',
    exact: true,
    main: () => <CompanySettingsTab />,
  },
  {
    path: '/company/settings/payout/edit',
    main: () => <EditPayoutAccount />,
  },
  {
    path: '/company/jobs',
    main: () => <ViewJobs />,
  },
];

export default routes;
