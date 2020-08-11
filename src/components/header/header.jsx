/* eslint-disable react/prop-types */
import React from 'react';
import './header.scss';
import UserProfile from '../UserProfile/UserProfile';
import SearchInput from '../form-fields/search-input/search-input';
import NavToggle from '../nav-toggle/nav-toggle';
import Notification from '../notification/notification';

const Header = ({ hasShrunk, handleToggleAction }) => (
	<div className="header">
		<div className="content">
			<div>
				<NavToggle
					collapsed={hasShrunk}
					handleAction={() => handleToggleAction()}
				/>
				<SearchInput />
			</div>
			<div className="flex-inline">
				<Notification />
				<UserProfile />
			</div>
		</div>
	</div>
);

export default Header;
