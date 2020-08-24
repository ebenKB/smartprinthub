/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import './ModalWrapper.scss';
import { Button } from 'semantic-ui-react';
// import ModalWrapperContext from '../../context/ModalWrapper.context';

const ModalWrapper = ({ children, closeAction }) => {
  const handleModalCloseAction = () => {
    closeAction();
  };

  return (
	<div className="modal-wrapper">
		<div className="modal-wrapper__overlay" />
		<div className="modal-content">
			<div className="modal-close">
				<Button
					content={<CancelIcon />}
					className="transparent"
					onClick={handleModalCloseAction}
				/>
			</div>
			{children}
		</div>
	</div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ModalWrapper;
