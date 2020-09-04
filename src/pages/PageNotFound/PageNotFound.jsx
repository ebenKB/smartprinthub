import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { ReactComponent as PageError } from '../../svg/error-404.svg';
import './PageNotFound.scss';

const PageNotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
	<div className="text-center _404">
		<PageError />
		<h3>We are sure you have missed something. Please check again.</h3>
		<Button
			size="tiny"
			content="Go Back"
			onClick={handleClick}
		/>
	</div>
  );
};

export default PageNotFound;
