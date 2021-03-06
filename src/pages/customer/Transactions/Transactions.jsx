import React from 'react';
import { Label, Button, Dropdown } from 'semantic-ui-react';
import { format } from 'date-fns';
import CustomerOrders from '../../../app/mockdata/customerTransactions';
import Tile from '../../../components/Tile/Tile';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import './Transactions.scss';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';
import SearchAndFilterWrapper from '../../../components/SearchAndFilterWrapper/SearchAndFilterWrapper';
import CustomFilter from '../../../components/CustomFilter/CustomFilter';

const Transactions = () => (
	<AppMainContent padTop>
		<SearchAndFilterWrapper>
			<CustomFilter text="Filter">
				<Dropdown.Item>
					some content here
				</Dropdown.Item>
			</CustomFilter>
		</SearchAndFilterWrapper>
		<AppMainContent
			parentClasses="app-pad m-t-40"
			mainClasses="very large container center opaque"
		>
			<RoundContentWrapper
				isRounded
				hasDivider={false}
			>
				<div className="transaction-tile__heading app border bottom m-b-20">
					<Label circular empty color="grey" size="mini" />
					<div>Amount</div>
					<div>Company</div>
					<div>Channel</div>
					<div>Reference</div>
					<div>Paid on</div>
				</div>
				{CustomerOrders.map((c) => (
					<Tile>
						<div className="transaction-tile__wrapper">
							<Label circular empty color="green" size="mini" />
							<div className="bold">
								<span className="m-r-5">{c.currency}</span>
								<span>{c.amount}</span>
							</div>
							<span>{c.company}</span>
							<span>{c.channel}</span>
							<span>{c.reference}</span>
							<span>{format(new Date(c.date), 'EEEE, do MMM yyyy')}</span>
						</div>
					</Tile>
				))}
				<div className="m-t-40  text-right">
					<span className="m-r-5">10 out 50</span>
					<Button content="Load more" className="transparent app-primary" />
				</div>
			</RoundContentWrapper>
		</AppMainContent>
	</AppMainContent>
);

export default Transactions;
