import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import TableWrapper from '../../../components/TableWrapper/TableWrapper';

const Companies = () => {
  const columns = [
    { id: 'company', label: 'COMPANY', minWidth: 200 },
    {
      id: 'email', label: 'EMAIL', minWidth: 100, align: 'left',
    },
    { id: 'name', label: 'PHONE', minWidth: 180 },
    {
      id: 'address',
      label: 'ADDRESS',
      minWidth: 400,
      align: 'left',
    },
    {
      id: 'size',
      label: 'ACTION',
      minWidth: 50,
      align: 'left',
    },
  ];

  function createData(company, email, name, address, size) {
    return {
      company, email, name, address, size,
    };
  }

  const rows = [
    createData(<span>Name of Company</span>, 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Pending', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Pending', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Completed', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Rejected', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
  ];

  return (
	<AppMainContent
		parentClasses="app-pad"
		mainClasses="very large container center"
	>
		<TableWrapper
			rows={rows}
			columns={columns}
		/>
	</AppMainContent>
  );
};

export default Companies;
