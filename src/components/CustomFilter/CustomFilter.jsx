import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

const CustomFilter = ({ children, text }) => (
	<Dropdown
		basic
		text="Filter Jobs"
		floating
		labeled
		icon={null}
		className="icon"
		trigger={(
			<div>
				<Icon name="filter" size="small" />
				<span>{text}</span>
			</div>
		)}
	>
		<Dropdown.Menu>
			{children}
		</Dropdown.Menu>
	</Dropdown>
);

CustomFilter.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default CustomFilter;
