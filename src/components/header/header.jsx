import React from 'react';
import './header.scss';
import UserProfile from '../user-profile/user-profile';
import SearchInput from '../form-fields/search-input/search-input';

const Header = () => (
	<div className="header">
		<div className="content">
			<SearchInput />
			<div>
				<UserProfile />
			</div>
		</div>
	</div>
);

export default Header;
