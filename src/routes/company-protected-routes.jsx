import React from 'react';
import CompanySettingsTab from '../pages/company/CompanySettingsTabpane/CompanySettingsTabpane';
import EditPayoutAccount from '../pages/company/EditPayoutAccount/EditPayoutAccount';

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
    main: () => <div>Show all company jobs here</div>,
  },
];

export default routes;
