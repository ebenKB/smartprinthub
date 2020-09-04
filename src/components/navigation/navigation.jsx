import React, { useState } from 'react';
// import { Accordion, Menu } from 'semantic-ui-react';
import './navigation.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Flag } from '../../svg/flag.svg';
import { ReactComponent as List } from '../../svg/list.svg';
import { ReactComponent as Box } from '../../svg/box.svg';
import { ReactComponent as PlusIcon } from '../../svg/plus.svg';
// import Can from '../Can/Can';

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  return (
	<div className="nav-wrapper">
		<div className="link-item">
			<Link to="/" className="flex center">
				<Flag className="nav-icon" />
				<span className="nav-caption">Welcome</span>
			</Link>
		</div>
		<div className="nav-label">JOBS</div>
		<div className="link-item">
			<Link to="/job/create" className="flex center link">
				<PlusIcon className="nav-icon" />
				<span className="nav-caption">Create new</span>
			</Link>
		</div>
		<div className="link-item">
			<Link to="/jobs" className="flex center link">
				<List className="nav-icon" />
				<span className="nav-caption">View all</span>
			</Link>
		</div>
		<div className="link-item">
			<Link to="/company/jobs" className="flex center link">
				<List className="nav-icon" />
				<span className="nav-caption">Company jobs</span>
			</Link>
		</div>
		<div className="nav-label">COMPANY</div>
		<div className="link-item">
			<Link to="/jobs" className="flex center link">
				<Box className="nav-icon" />
				<span className="nav-caption">View all</span>
			</Link>
		</div>
		<div className="link-item">
			<Link to="/" className="flex center link">
				<PlusIcon className="nav-icon" />
				<span className="nav-caption">Add new</span>
			</Link>
		</div>

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

export default Navigation;
