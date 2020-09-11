import React from 'react';
import { Input } from 'semantic-ui-react';
import './SearchInputLite.scss';

const SearchInputLite = () => {
  const handleAction = () => {
    console.log('We want to handle the action from the search');
  };

  return (
	<div>
		<Input
			type="search"
			search
			size="mini"
			placeholder="Enter title to search"
			className="input-lite"
			action={
        { icon: 'search', onClick: handleAction }
      }
		/>
	</div>
  );
};

export default SearchInputLite;
