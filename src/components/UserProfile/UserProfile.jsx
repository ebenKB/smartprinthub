import React from 'react';
import './UserProfile.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Divider from '../AppDivider/AppDivider';
import { ReactComponent as DownArrow } from '../../svg/down-arrow.svg';
import { logout, selectAccountType } from '../../redux/slices/user';

const UserProfile = () => {
  const accountType = useSelector(selectAccountType);
  const disptach = useDispatch();

  const handleLogout = () => {
    disptach(logout());
  };

  return (
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
					<Link to={`/app/${accountType}/settings`} className="link">
						My Profile
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
				<Button className="transparent" content="Logout" onClick={handleLogout} />
			</div>
		</div>
	</div>
  );
};

export default UserProfile;
