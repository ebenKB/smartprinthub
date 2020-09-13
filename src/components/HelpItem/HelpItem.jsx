/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
// import { Divider } from 'semantic-ui-react';

const HelpItem = ({ help }) => (
	<div className="m-b-20">
		<div>
			<h5>{help.title}</h5>
			<p>{help.help}</p>
		</div>
	</div>
);

HelpItem.propTypes = {
  help: PropTypes.object.isRequired,
};

export default HelpItem;
