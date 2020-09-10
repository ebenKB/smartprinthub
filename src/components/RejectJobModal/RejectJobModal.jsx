import React from 'react';
import { Button } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';

const RejectJobModal = ({ handleCloseAction }) => (
	<ModalWrapper>
		<RoundContentWrapper
			heading="Reject Job"
			classes="mini container center opaque m-t-100"
			isRounded
		>
			<h3>Are you sure you want to reject the job</h3>
			<p>If you reject the job, it means you do not want to print it.</p>
			<div className="text-right m-t-20">
				<Button content="No. Cancel" />
				<Button content="Yes. Reject Job" negative onClick={handleCloseAction} />
			</div>
		</RoundContentWrapper>
	</ModalWrapper>
);

RejectJobModal.propTypes = {
  handleCloseAction: PropTypes.func.isRequired,
};

export default RejectJobModal;
