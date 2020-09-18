/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
import React, { useState, Fragment } from 'react';
import Input from '../input/input';
import { ReactComponent as Icon } from '../../../svg/search.svg';

import './search-input.scss';

const SearchInput = ({ children, handleSearch, ...rest }) => {
  const [focus] = useState(false);
  const [hasContent, setContent] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleChange = (e, data) => {
    if (data.value.length > 2) {
      setContent(true);
      setSearchText(data.value);
    } else {
      setContent(false);
    }
  };

  return (
	<div className="search-input">
		<Fragment>
			<Icon className="dark small custom icon" />
			<Input
				classes="search"
				type="search"
				focus={focus}
				onChange={handleChange}
				action={{
				  icon: <span>Search</span>,
				  onClick: () => handleSearch(searchText),
				}}
				{...rest}
			/>
		</Fragment>
		{ hasContent && (
			<div className="search-dropdown text-left">
				<div className="search-content">
					{children}
				</div>
			</div>
		)}
	</div>
  );
};

export default SearchInput;
