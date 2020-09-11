import React from 'react';
import './SearchAndFilterWrapper.scss';
import { PropTypes } from 'prop-types';

const SearchAndFilterWrapper = ({ children }) => (
	<div className="search-filter__wrapper flex center">
		{children}
	</div>
);

SearchAndFilterWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SearchAndFilterWrapper;
