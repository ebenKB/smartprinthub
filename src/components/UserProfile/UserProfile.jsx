import React from 'react';
import './UserProfile.scss';
import { Link } from 'react-router-dom';
import Divider from '../divider/divider';

const UserProfile = () => (
	<div className="user-profile">
		User eben
		<div className="user-profile__content">
			<div className="dropdown-item">
				<div className="flex-inline flex center">
					<div className="user-name__caption" />
					<div className="dropdown__heading">
						<div className="bold">Ebenezer Adjei</div>
						<div className="">example@email.com</div>
					</div>
				</div>
			</div>
			<Divider type="faint" />
			<div className="dropdown-item">
				<Link to="/" className="link">
					My Profile
				</Link>
			</div>
			<div className="dropdown-item">
				<Link to="/" className="link">
					Settings
				</Link>
			</div>
			<div className="dropdown-item">
				<Link to="/" className="link">
					My Companies
				</Link>
			</div>
			<div className="dropdown-item">
				<Link to="/" className="link">
					Notifications
				</Link>
			</div>
			<Divider type="faint" />
			<div className="dropdown-item">
				<Link to="/" className="link">
					Help
				</Link>
			</div>
			<div className="dropdown-item">
				<Link to="/" className="link">
					Logout
				</Link>
			</div>
		</div>
	</div>
);

export default UserProfile;
