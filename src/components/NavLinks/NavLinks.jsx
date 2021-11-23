import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Flag } from 'svg/flag.svg';
import { ReactComponent as List } from 'svg/list.svg';
import { ReactComponent as PlusIcon } from 'svg/plus.svg';
import { ReactComponent as TransIcon } from 'svg/transaction.svg';
import { ReactComponent as HomeIcon } from 'svg/home.svg';
import Can from '../Can/Can';
import { selectAccountType } from 'redux/slices/user';
import './NavLinks.scss';
import { selectMenuState } from 'redux/slices/app';

const NavigationLinks = () => {
  const accountType = useSelector(selectAccountType);
	const hasToggleMenu = useSelector(selectMenuState);

  return (
	<div className="nav-wrapper">
		<div className="link-item">
			<NavLink to="/" exact activeClassName="nav-selected" className="flex center link">
				<HomeIcon className="nav-icon" />
				{!hasToggleMenu && <span className="nav-caption">Home</span>}
			</NavLink>
		</div>
		<div className="link-item">
			<NavLink to="/welcome" exact activeClassName="nav-selected" className="flex center link">
				<Flag className="nav-icon" />
				<span className="nav-caption">Welcome</span>
			</NavLink>
		</div>
		{!hasToggleMenu && <div className="nav-label">PAYMENTS</div>}
		<div className="link-item">
			<NavLink to={`/${accountType}/transactions`} activeClassName="nav-selected" className="flex center link">
				<TransIcon className="nav-icon" />
				<span className="nav-caption">Transactions</span>
			</NavLink>
		</div>
		{!hasToggleMenu && <div className="nav-label">JOBS</div>}
		<Can
			perform="job:create"
			userRole={accountType}
			yes={() => (
				<div className="link-item">
					<NavLink to="/job/create" activeClassName="nav-selected" className="flex center link">
						<PlusIcon className="nav-icon" />
						<span className="nav-caption">Create new</span>
					</NavLink>
				</div>
			)}
			no={() => null}
		/>
		<Can
			perform="job:create"
			userRole={accountType}
			yes={() => (
				<div className="link-item">
					<NavLink to="/job/create-new" activeClassName="nav-selected" className="flex center link">
						<PlusIcon className="nav-icon" />
						<span className="nav-caption">Create new v2</span>
					</NavLink>
				</div>
			)}
			no={() => null}
		/>
		<Can
			perform="job:view"
			userRole={accountType}
			yes={() => (
				<div className="link-item">
					<NavLink to="/company/jobs" activeClassName="nav-selected" className="flex center link">
						<List className="nav-icon" />
						<span className="nav-caption">View Jobs</span>
					</NavLink>
				</div>
			)}
			no={() => null}
		/>
		<Can
			perform="job:view-all"
			userRole={accountType}
			yes={() => (
				<div className="link-item">
					<NavLink to="/jobs" exact activeClassName="nav-selected" className="flex center link">
						<List className="nav-icon" />
						<span className="nav-caption">View all</span>
					</NavLink>
				</div>
			)}
			no={() => null}
		/>
		{!hasToggleMenu && <div className="nav-label">COMPANY</div>}
		<div className="link-item">
			<NavLink to="/companies" exact activeClassName="nav-selected" className="flex center link">
				<List className="nav-icon" />
				<span className="nav-caption">View companies</span>
			</NavLink>
		</div>
		<Can
			perform="company:add"
			userRole={accountType}
			yes={() => (
				<div className="link-item">
					<NavLink to="/companies/new" exact activeClassName="nav-selected" className="flex center link">
						<PlusIcon className="nav-icon" />
						<span className="nav-caption">Add new</span>
					</NavLink>
				</div>
			)}
			no={() => null}
		/>
	</div>
  );
};

export default NavigationLinks;
