/* eslint-disable react/jsx-fragments */
import React, { useState, Fragment } from 'react';
import Input from '../input/input';
import { ReactComponent as Icon } from '../../../svg/search.svg';

import './search-input.scss';

const SearchInput = () => {
  const [focus] = useState(false);
  const [hasContent, setContent] = useState(false);

  const handleChange = (e, data) => {
    if (data.value.length > 2) {
      setContent(true);
    } else {
      setContent(false);
    }
  };

  return (
	<div className="search-input">
		<Fragment>
			<Icon className="dark small icon" />
			<Input
				classes="custom search tiny"
				placeholder="Enter item to search"
				type="search"
				focus={focus}
				onChange={handleChange}
			/>
		</Fragment>
		{
    hasContent && (
	<div className="search-dropdown">
		<div className="search-content">
			<ul>
				<li>Search option - 1</li>
				<li>Search option - 2</li>
				<li>Search option - 3</li>
				<li>Search option - 4</li>
			</ul>
		</div>
	</div>
    )
    }
	</div>
  );
};

export default SearchInput;
