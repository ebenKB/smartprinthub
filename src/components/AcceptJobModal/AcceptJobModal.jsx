import React from 'react';
import { Button, Checkbox } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import RoundContentWrapper from '../RoundContentWrapper/RoundContentWrapper';

const AcceptJobModal = ({ handleCloseAction }) => (
	<ModalWrapper>
		<RoundContentWrapper
			classes="m-t-50 mini container opaque center"
			heading="Accept and Download Job"
			isRounded
		>
			<div className="m-t-10">
				<Checkbox label="I have accepted to print this job" />
			</div>
			<div className="text-right m-t-40">
				<Button
					content="Cancel"
					size="tiny"
					onClick={handleCloseAction}
				/>
				<Button
					content="Download Job"
					positive
					size="tiny"
				/>
			</div>
		</RoundContentWrapper>
	</ModalWrapper>
);

AcceptJobModal.propTypes = {
  handleCloseAction: PropTypes.func.isRequired,
};

export default AcceptJobModal;
