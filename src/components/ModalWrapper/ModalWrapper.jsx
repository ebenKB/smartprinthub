/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import './ModalWrapper.scss';
import { Modal } from 'semantic-ui-react';
// import ModalWrapperContext from '../../context/ModalWrapper.context';

const ModalWrapper = ({ children, closeAction, title, open, ...rest}) => {
  // const handleModalCloseAction = () => {
  //   closeAction();
  // };

  return (
	// <div className="modal-wrapper">
	// 	<div className="modal-wrapper__overlay" />
	// 	<div className="modal-content">
	// 		<div className="modal-close">
	// 			<Button
	// 				content={<CancelIcon />}
	// 				className="transparent"
	// 				onClick={handleModalCloseAction}
	// 			/>
	// 		</div>
	// 		{children}
	// 	</div>
	// </div>
	<Modal 
		open={open}
		onClose={closeAction}
		size="mini"
		{...rest} 
	>
		<Modal.Header>
			{title}
		</Modal.Header>
		<Modal.Content className="m-t-50">
			{children}
		</Modal.Content>
	</Modal>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ModalWrapper;
