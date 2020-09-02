import React from 'react';
import CompanySettingsTab from '../pages/company/CompanySettingsTabpane/CompanySettingsTabpane';

const routes = [
  {
    path: '/company/settings/:page',
    exact: true,
    main: () => <CompanySettingsTab />,
  },
];

export default routes;
