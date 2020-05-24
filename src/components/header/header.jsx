import React from 'react';
import './header.scss';
import UserProfile from '../user-profile/user-profile';

const Header = () => (
	<div className="header">
		<div className="content">
			search for jobs by name
			<div>
				<UserProfile />
			</div>
		</div>
	</div>
);

export default Header;
