/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
// import { Divider } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import HelpItem from '../HelpItem/HelpItem';
import Divider from '../divider/divider';

const Help = ({ helps }) => (
	<div>
		<Divider type="thick" title="HELP" classes="m-b-10" />
		{helps.map((help, index) => <HelpItem help={help} key={index} />)}
	</div>
);

Help.propTypes = {
  helps: PropTypes.array.isRequired,
};
export default Help;
