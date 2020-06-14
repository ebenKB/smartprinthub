/* eslint-disable react/prop-types */
import React from 'react';
import './header.scss';
import UserProfile from '../user-profile/user-profile';
import SearchInput from '../form-fields/search-input/search-input';
import NavToggle from '../nav-toggle/nav-toggle';

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
			<div>
				<UserProfile />
			</div>
		</div>
	</div>
);

export default Header;
