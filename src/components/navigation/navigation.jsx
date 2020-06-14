import React, { useState } from 'react';
import { Accordion, Menu } from 'semantic-ui-react';
import './navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  return (
	<div className="nav-wrapper">
		<Accordion as={Menu} vertical>
			<Menu.Item>
				<Accordion.Title
					active={activeIndex === 0}
					content={<span>XX- Jobs</span>}
					index={0}
					onClick={handleClick}
					className="m-b-10"
				/>
				<Accordion.Content active={activeIndex === 0} className="menu-option">
					<Link to="/rfx">Create</Link>
				</Accordion.Content>
				<Accordion.Content active={activeIndex === 0} className="menu-option">
					<Link to="/rfx/new">View</Link>
				</Accordion.Content>
			</Menu.Item>
		</Accordion>
		<Accordion as={Menu} vertical>
			<Menu.Item>
				<Accordion.Title
					active={activeIndex === 1}
					content={<span>XX-Companies</span>}
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
