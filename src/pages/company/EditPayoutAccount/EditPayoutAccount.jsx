import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import history from 'utils/history';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';

const EditPayoutAccount = () => {
  // const history = history;
  return (
	<RoundContentWrapper
		heading="Edit Payout Account"
		classes="medium center container m-t-40"
	>
		<h3>Edit payout account settings</h3>
		<div className="m-t-40 m-b-40">
			<Button content="Go back" onClick={() => history.goBack()} positive />
		</div>
	</RoundContentWrapper>
  );
};

export default EditPayoutAccount;
