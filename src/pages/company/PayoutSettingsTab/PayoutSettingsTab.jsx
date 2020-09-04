import React from 'react';
import { Table, Button, Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';
import { ReactComponent as Check } from '../../../svg/check.svg';

const CompanyPayoutSettingsTab = () => {
  const history = useHistory();
  const { location: { pathname } } = history;

  const options = [
    { key: 1, text: 'Yes', value: 1 },
    { key: 2, text: 'No', value: 2 },
  ];

  return (
	<RoundContentWrapper
		heading="Payout accounts"
		classes="large center opaque container m-t-40 m-b-40"
		isRounded
	>
		<Table basic="very">
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Currency</Table.HeaderCell>
					<Table.HeaderCell>Bank/Mobile money Provider</Table.HeaderCell>
					<Table.HeaderCell>Account Details</Table.HeaderCell>
					<Table.HeaderCell>Account Status</Table.HeaderCell>
					<Table.HeaderCell>Enabled</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>GHS</Table.Cell>
					<Table.Cell>Mtn</Table.Cell>
					<Table.Cell>
						<span>+233548086391(Ebenezer Adjei)</span>
						<span>
							<Link to={`${pathname}/edit`} className="m-l-10">
								<Button className="transparent" content="Edit" size="tiny" icon="edit" />
							</Link>
						</span>
					</Table.Cell>
					<Table.Cell>
						<span className="flex center">
							<span>Verified</span>
							<Check className="m-l-5 small icon" />
						</span>
					</Table.Cell>
					<Table.Cell>Primary</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>GHS</Table.Cell>
					<Table.Cell>Cal Bank</Table.Cell>
					<Table.Cell>
						<span>1234345656565(Ebenezer Adjei)</span>
						<span>
							<Link to={`${pathname}/edit`} className="m-l-10">
								<Button className="transparent" content="Edit" size="tiny" icon="edit" />
							</Link>
						</span>
					</Table.Cell>
					<Table.Cell>
						<span className="flex center">
							<span>Verified</span>
							<Check className="m-l-5 small icon" />
						</span>
					</Table.Cell>
					<Table.Cell>Secondary</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
		<div className="m-t-40">
			<span>Allow automatic payout</span>
			<Dropdown
				size="mini"
				className="m-l-10"
				selection
				options={options}
				placeholder="Select an option"
				value={1}
			/>
		</div>
	</RoundContentWrapper>
  );
};

export default CompanyPayoutSettingsTab;
