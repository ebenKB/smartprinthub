/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import { ReactComponent as LinkIcon } from '../../svg/link.svg';
import './graph-item.scss';

const GraphItem = ({ children, title, subtitle }) => (
	<div className="graph-item">
		<div className="bold medium-caption">
			{title}
			<LinkIcon className="caption-icon m-l-5 small icon" />
		</div>
		<p className="xsm-caption">{subtitle}</p>
		<div className="m-t-20">{children}</div>
	</div>
);

GraphItem.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

GraphItem.defaultProps = {
  subtitle: '',
};

export default GraphItem;
