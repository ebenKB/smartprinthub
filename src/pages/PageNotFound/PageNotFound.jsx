import React from 'react';
import { Button } from 'semantic-ui-react';
import { ReactComponent as PageError } from '../../svg/error-404.svg';
import './PageNotFound.scss';
import history from 'utils/history';

const PageNotFound = () => {
  const handleClick = () => {
    history.goBack();
  };

  return (
	<div className="text-center _404">
		<PageError style={{width: "240px", height: "auto"}} />
		{/* <h3>We are sure you have missed something. Please check again.</h3> */}
		<p>Don't worry. It's just a 404</p>
		<Button
			size="tiny"
			content="Go Back"
			onClick={handleClick}
		/>
	</div>
  );
};

export default PageNotFound;
