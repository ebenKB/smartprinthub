/* eslint-disable react/prop-types */
import React from 'react';
import './header.scss';
import UserProfile from '../UserProfile/UserProfile';
// import SearchInput from '../form-fields/search-input/search-input';
import NavToggle from '../nav-toggle/nav-toggle';
import Notification from '../notification/notification';
import AppHeaderContext from '../../context/AppHeaderContext';

const Header = ({ hasShrunk, handleToggleAction }) => (
	<div className="header">
		<div className="content">
			<div className="flex center">
				<NavToggle
					collapsed={hasShrunk}
					handleAction={() => handleToggleAction()}
				/>
				{/* <SearchInput /> */}
				<AppHeaderContext.Consumer>
					{(value) => (
						<span className="bold">{value}</span>
					)}
				</AppHeaderContext.Consumer>
			</div>
			<div className="flex-inline">
				<Notification />
				<UserProfile />
			</div>
		</div>
	</div>
);

export default Header;
