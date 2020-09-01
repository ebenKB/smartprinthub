import React from 'react';
import CompanySettings from '../pages/CompanySettings/CompanySettings';

const routes = [
  {
    path: '/company/settings/:page',
    exact: true,
    main: () => <CompanySettings />,
  },
];

export default routes;
