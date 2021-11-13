/* eslint-disable react/prop-types */
import React from 'react';
import './header.scss';
import { useParams, useHistory } from 'react-router-dom';
import UserProfile from '../UserProfile/UserProfile';
// import SearchInput from '../form-fields/search-input/search-input';
import NavToggle from '../nav-toggle/nav-toggle';
import Notification from '../notification/notification';
import AppHeaderContext from '../../context/AppHeaderContext';
import history from 'utils/history';

const Header = ({ hasShrunk, handleToggleAction }) => {
  const { id } = useParams();
  // const { location: { pathname } } = useHistory();
	const { location: { pathname } } = history;

  // sets the title of the Dashboard in the layout
  const getTitle = () => {
    const title = pathname.split('/');
    if (!id) {
      return title[title.length - 1];
    }
    return (
	<span>
		<span>{title}</span>
		<span>{id}</span>
	</span>
    );
  };

  return (
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
						<span className="bold">
							{value}
							{!value && getTitle()}
						</span>
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
};

export default Header;
