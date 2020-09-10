import React from 'react';
import { Button, TextArea } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';

const ReviewJobModal = ({ handleCloseAction }) => (
	<ModalWrapper
		closeAction={handleCloseAction}
	>
		<RoundContentWrapper
			heading="Add Review Comment"
			classes="mini container center round opaque m-t-140 p-all-15"
			isRounded
		>
			<div className="m-t-20">
				<TextArea cols="45" rows="6" placeholder="Enter review comment here" wrap="soft" />
			</div>
			<div className="m-t-40 text-right">
				<Button content="Cancel" onClick={handleCloseAction} />
				<Button content="Save" positive />
			</div>
		</RoundContentWrapper>
	</ModalWrapper>
);

ReviewJobModal.propTypes = {
  handleCloseAction: PropTypes.func.isRequired,
};

export default ReviewJobModal;
