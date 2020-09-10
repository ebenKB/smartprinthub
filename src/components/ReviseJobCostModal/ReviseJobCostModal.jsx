import React from 'react';
import { Input, Button, Label } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';

const ReviseJobCostModal = ({ handleCloseAction }) => (
	<ModalWrapper
		closeAction={handleCloseAction}
	>
		<RoundContentWrapper
			heading="New Job Cost"
			classes="mini container center round opaque m-t-140 p-all-15"
			isRounded
		>
			<div className="m-t-20">
				<div className="m-b-20">
					<Label>
						Amount Paid: GHC 90.89
					</Label>
				</div>
				<Input type="number" placeholder="Enter New Amount" fluid />
			</div>
			<div className="m-t-40 text-right">
				<Button content="Cancel" onClick={handleCloseAction} />
				<Button content="Save" positive />
			</div>
		</RoundContentWrapper>
	</ModalWrapper>
);

ReviseJobCostModal.propTypes = {
  handleCloseAction: PropTypes.func.isRequired,
};

export default ReviseJobCostModal;
