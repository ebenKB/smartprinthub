/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import './ModalWrapper.scss';

const ModalWrapper = ({ children }) => (
	<div className="modal-wrapper">
		{children}
	</div>
);

ModalWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ModalWrapper;
