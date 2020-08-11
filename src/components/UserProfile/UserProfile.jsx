import React from 'react';
import './UserProfile.scss';
import { Link } from 'react-router-dom';
import Divider from '../divider/divider';
import { ReactComponent as DownArrow } from '../../svg/down-arrow.svg';

const UserProfile = () => (
	<div className="user-profile">
		<div className="target flex-inline">
			<span>Eben_KB</span>
			<DownArrow className="x-small icon" />
		</div>
		<div className="user-profile__content">
			<div className="dropdown-item">
				<div className="flex-inline flex center">
					<div className="user-name__caption">EB</div>
					<div className="dropdown__heading">
						<div className="bold">Ebenezer Adjei</div>
						<div className="">example@email.com</div>
					</div>
				</div>
			</div>
			<Divider type="faint" />
			<div className="dropdown-item__wrapper">
				<div className="dropdown-item">
					<Link to="/" className="link">
						My Profile
					</Link>
				</div>
			</div>
			<div className="dropdown-item__wrapper">
				<div className="dropdown-item">
					<Link to="/" className="link">
						Settings
					</Link>
				</div>
			</div>
			<div className="dropdown-item__wrapper">
				<div className="dropdown-item">
					<Link to="/" className="link">
						My Companies
					</Link>
				</div>
			</div>
			<div className="dropdown-item__wrapper">
				<div className="dropdown-item">
					<Link to="/" className="link">
						Notifications
					</Link>
				</div>
			</div>
			<Divider type="faint" />
			<div className="dropdown-item__wrapper">
				<div className="dropdown-item">
					<Link to="/" className="link">
						Help
					</Link>
				</div>
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
