import React, { useState } from 'react';
import { Accordion, Menu } from 'semantic-ui-react';
import './navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  return (
	<div className="nav-wrapper">
		<Accordion as={Menu} vertical>
			<div className="ui menu default-bg">
				<Link to="/" className="item">
					Welcome
				</Link>
			</div>
			<Menu.Item>
				<Accordion.Title
					active={activeIndex === 0}
					content={<span>Jobs</span>}
					index={0}
					onClick={handleClick}
					className="m-b-10"
				/>
				<Accordion.Content active={activeIndex === 0} className="menu-option">
					<Link to="/job/create">Create</Link>
				</Accordion.Content>
				<Accordion.Content active={activeIndex === 0} className="menu-option">
					<Link to="/jobs/view">View</Link>
				</Accordion.Content>
			</Menu.Item>
		</Accordion>
		<Accordion as={Menu} vertical>
			<Menu.Item>
				<Accordion.Title
					active={activeIndex === 1}
					content={<span>Companies</span>}
					index={1}
					onClick={handleClick}
					className="m-b-10"
				/>
				<Accordion.Content active={activeIndex === 1} className="menu-option">
					<Link to="/rfx">Create</Link>
				</Accordion.Content>
				<Accordion.Content active={activeIndex === 1} className="menu-option">
					<Link to="/rfx/new">View</Link>
				</Accordion.Content>
			</Menu.Item>
		</Accordion>
	</div>
  );
};

export default Navigation;
