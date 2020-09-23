import React from 'react';
// import { Accordion, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Flag } from '../../svg/flag.svg';
import { ReactComponent as List } from '../../svg/list.svg';
import { ReactComponent as Box } from '../../svg/box.svg';
import { ReactComponent as PlusIcon } from '../../svg/plus.svg';
import { ReactComponent as TransIcon } from '../../svg/transaction.svg';
import { ReactComponent as HomeIcon } from '../../svg/home.svg';
import Can from '../Can/Can';
import { selectAccountType } from '../../redux/slices/user';
import './NavLinks.scss';

const NavigationLinks = () => {
  // const [activeIndex, setActiveIndex] = useState(-1);
  const accountType = useSelector(selectAccountType);

  // const handleClick = (e, titleProps) => {
  //   const { index } = titleProps;
  //   const newIndex = activeIndex === index ? -1 : index;
  //   setActiveIndex(newIndex);
  // };

  return (
	<div className="nav-wrapper">
		<div className="link-item">
			<NavLink to="/" exact activeClassName="nav-selected" className="flex center link">
				<HomeIcon className="nav-icon" />
				<span className="nav-caption">Home</span>
			</NavLink>
		</div>
		<div className="link-item">
			<NavLink to="/welcome" exact activeClassName="nav-selected" className="flex center link">
				<Flag className="nav-icon" />
				<span className="nav-caption">Welcome</span>
			</NavLink>
		</div>
		<div className="nav-label">PAYMENTS</div>
		<div className="link-item">
			<NavLink to={`/${accountType}/transactions`} activeClassName="nav-selected" className="flex center link">
				<TransIcon className="nav-icon" />
				<span className="nav-caption">Transactions</span>
			</NavLink>
		</div>
		<div className="nav-label">JOBS</div>
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
		<div className="nav-label">COMPANY</div>
		<div className="link-item">
			<NavLink to="/companies" exact activeClassName="nav-selected" className="flex center link">
				<Box className="nav-icon" />
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

		{/* <Accordion as={Menu} vertical>
			<div className="ui menu default-bg">
				<Link to="/" className="item flex center">
					<Flag className="nav-icon" />
					<span className="nav-caption">Welcome</span>
				</Link>
			</div>
			<Menu.Item>
				<Accordion.Title
					active={activeIndex === 0}
					content={(
						<span className="flex center">
							<List className="nav-icon" />
							<span className="nav-caption">Jobs</span>
						</span>
					)}
					index={0}
					onClick={handleClick}
					className="m-b-10"
				/>
				<Can
					perform="job:create"
					userRole="customer"
					yes={() => (
						<Accordion.Content active={activeIndex === 0} className="menu-option">
							<Link to="/job/create">Create new</Link>
						</Accordion.Content>
					)}
					no={() => null}
				/>
				<Can
					perform="job:view"
					userRole="customer"
					yes={() => (
						<Accordion.Content active={activeIndex === 0} className="menu-option">
							<Link to="/jobs">View all</Link>
						</Accordion.Content>
					)}
					no={() => null}
				/>
			</Menu.Item>
		</Accordion>
		<Accordion as={Menu} vertical>
			<Menu.Item>
				<Accordion.Title
					active={activeIndex === 1}
					content={(
						<span className="flex center">
							<Box className="nav-icon" />
							<span className="nav-caption">Companies</span>
						</span>
					)}
					index={1}
					onClick={handleClick}
					className="m-b-10"
				/>
				<Accordion.Content active={activeIndex === 1} className="menu-option">
					<Link to="/rfx">Add new</Link>
				</Accordion.Content>
				<Accordion.Content active={activeIndex === 1} className="menu-option">
					<Link to="/rfx/new">View all</Link>
				</Accordion.Content>
			</Menu.Item>
		</Accordion> */}
	</div>
  );
};

export default NavigationLinks;
