import React, { useEffect, useCallback } from 'react';
import { Label, Button, Dropdown, Grid } from 'semantic-ui-react';
import { format } from 'date-fns';
import Tile from 'components/Tile/Tile';
import AppMainContent from 'components/app-main-content/app-main-content';
import './Transactions.scss';
import RoundContentWrapper from 'components/RoundContentWrapper/RoundContentWrapper';
import SearchAndFilterWrapper from 'components/SearchAndFilterWrapper/SearchAndFilterWrapper';
import CustomFilter from 'components/CustomFilter/CustomFilter';
import { getAllTransactions } from 'apiService/transaction';
import { useDispatch, useSelector } from 'react-redux';
import { saveTransactions, selectTransactions } from 'redux/slices/transaction';
import styles from "./transaction.module.css";
// import AppLoader from 'components/AppLoader/AppLoader';

const Transactions = () => {
	const dispatch = useDispatch();
	const transactions = useSelector(selectTransactions);

	const loadTransactions = useCallback(async () => {
		const response = await getAllTransactions();
		dispatch(saveTransactions(response.data));
	}, [dispatch])

	useEffect(() => {
		loadTransactions();
	}, [loadTransactions]);

	return (
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
			mainClasses="huge container center opaque"
		>
			<RoundContentWrapper
				isRounded
				hasDivider={false}
			>
				<div className="transaction-tile__heading app border bottom m-b-20">
					<div>
						<Label circular empty color="default" size="mini" />
						<span className="m-l-5 m-r-5">Amount</span>
					</div>
					<div>Reference</div>
					<div>Paid on</div>
					<div>Status</div>
				</div>
				{/* <AppLoader /> */}
				{transactions && transactions.map((trans) => (
					<Tile>
						<div className="transaction-tile__wrapper">
							<div className="bold">
								<Label circular empty color="green" size="mini" />
								<span className="m-l-5 m-r-5">GHS</span>
								<span>{trans.amount}</span>
							</div>
							<div>{trans.reference}</div>
							<div>{format(new Date(trans.timestamp), 'eeee, do MMM yyyy hh:mm a')}</div>
							<div>{trans.status}</div>
						</div>
					</Tile>
				))}
				<div className={`m-t-40 ${styles.content_footer}`}>
					<Grid>
						<Grid.Row columns={2}>
							<Grid.Column width={8}>
								<span className="m-r-5">{transactions.length} out 50</span>
							</Grid.Column>
							<Grid.Column width={8} className="text-right">
								<Button content="Load more" className="transparent app-primary" />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</RoundContentWrapper>
		</AppMainContent>
	</AppMainContent>
	)
}

export default Transactions;
