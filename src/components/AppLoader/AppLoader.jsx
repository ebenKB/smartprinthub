import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../Spinner/Spinner';

const AppLoader = ({ caption }) => (
	<div className="text-center">
		<Spinner />
		<span>{caption}</span>
	</div>
);

AppLoader.propTypes = {
  caption: PropTypes.string,
};

AppLoader.defaultProps = {
  caption: '',
};

export default AppLoader;
