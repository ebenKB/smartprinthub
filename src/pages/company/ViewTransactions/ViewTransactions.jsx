/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import TableWrapper from '../../../components/TableWrapper/TableWrapper';

const columns = [
  { id: 'status', label: 'STATUS', minWidth: 50 },
  {
    id: 'jobs', label: 'NUMBER OF JOBS', minWidth: 50, align: 'center',
  },
  { id: 'name', label: 'CUSTOMER', minWidth: 250 },
  {
    id: 'code', label: 'AMOUNT(GHC)', minWidth: 100, align: 'right',
  },
  {
    id: 'population',
    label: 'CHANNEL',
    minWidth: 80,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'PAID ON',
    minWidth: 50,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(status, jobs, name, code, population, size) {
  return {
    status, jobs, name, code, population, size,
  };
}

const rows = [
  createData('Completed', 10, 'Cecelia Frimpong Ansah', 78.99, 'MTN Mobile Money', 'Monday September 12, 2020'),
  createData('Pending', 10, 'Danniella Ansah', 90.45, 'Tigo Cash', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Elizabeth Aggrey', 45.80, 'MTN Mobile Money', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Felecia Ampomaa', 78.99, 'MTN Mobile Money', 'Tuesday September 15, 2020'),
  createData('Completed', 10, 'Daniella Adjei', 23.23, 'Vodafone Ghana Limited', 'Friday September 12, 2020'),
  createData('Completed', 10, 'Cecelia Frimpong Ansah', 78.99, 'MTN Mobile Money', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Danniella Ansah', 90.45, 'Tigo Cash', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Jeffery Huddof', 45.80, 'MTN Mobile Money', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Marting Pobi', 78.99, 'MTN Mobile Money', 'Tuesday September 15, 2020'),
  createData('Completed', 10, 'Gifty Osei', 23.23, 'Vodafone Ghana Limited', 'Friday September 12, 2020'),
  createData('Completed', 10, 'Leticia Frimpong Ansah', 78.99, 'MTN Mobile Money', 'Monday September 12, 2020'),
  createData('Pending', 10, 'Danniella Ansah', 90.45, 'Tigo Cash', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Elizabeth Aggrey', 45.80, 'MTN Mobile Money', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Felecia Ampomaa', 78.99, 'MTN Mobile Money', 'Tuesday September 15, 2020'),
  createData('Completed', 10, 'Daniella Adjei', 23.23, 'Vodafone Ghana Limited', 'Friday September 12, 2020'),
  createData('Completed', 10, 'Cecelia Frimpong Ansah', 78.99, 'MTN Mobile Money', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Danniella Ansah', 90.45, 'Tigo Cash', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Elizabeth Aggrey', 45.80, 'MTN Mobile Money', 'Monday September 12, 2020'),
  createData('Completed', 10, 'Felecia Ampomaa', 78.99, 'MTN Mobile Money', 'Tuesday September 15, 2020'),
  createData('Rejected', 10, 'Benjamin Osei', 23.23, 'Vodafone Ghana Limited', 'Friday September 12, 2020'),
];

export default function StickyHeadTable() {
  return (
	<AppMainContent>
		<TableWrapper
			rows={rows}
			columns={columns}
		/>
	</AppMainContent>
  );
}
