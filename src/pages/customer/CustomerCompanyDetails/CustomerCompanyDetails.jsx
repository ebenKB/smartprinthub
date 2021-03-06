import React from 'react';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import CustomerCompanyPreview from '../../../components/CustomerCompanyPreview/CustomerCompanyPreview';

const ShowCompanyDetails = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
	<AppMainContent padTop mainClasses="medium container center opaque">
		<CustomerCompanyPreview footer={(
			<div className="m-t-40 text-right">
				<div className="flex flex-inline">
					<Button content="Go Back" size="small" basic onClick={goBack} />
					<Button content="Remove Company" size="small" negative />
				</div>
			</div>
    )}
		/>
	</AppMainContent>
  );
};

export default ShowCompanyDetails;
