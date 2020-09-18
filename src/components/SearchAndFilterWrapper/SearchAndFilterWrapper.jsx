import React from 'react';
import './SearchAndFilterWrapper.scss';
import { PropTypes } from 'prop-types';
import SearchInputLite from '../form-fields/SearchInputLite/SearchInputLite';

const SearchAndFilterWrapper = ({ children }) => (
	<div className="search-filter__wrapper flex center">
		{children}
		<span className="v-divider" />
		<SearchInputLite />
	</div>
);

SearchAndFilterWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SearchAndFilterWrapper;
