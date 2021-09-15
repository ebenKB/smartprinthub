/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { clearNotification } from 'redux/slices/app';

const ToastNotificaton = ({ message = '', type = '', notificationID="" }) => {
  const dispatch = useDispatch();

  const toastOptions = {
    autoClose: 5000,
    type: toast.TYPE.SUCCESS,
    position: toast.POSITION.TOP_RIGHT,
    onClose: () => dispatch(clearNotification(notificationID)),
  };

  const getToast = () => {
    switch (type) {
      case 'success': {
        toastOptions.type = toast.TYPE.SUCCESS;
        break;
      }

      case 'info': {
        toastOptions.type = toast.TYPE.INFO;
        break;
      }

      case 'error': {
        toastOptions.type = toast.TYPE.ERROR;
        break;
      }

      case 'warning': {
        toastOptions.type = toast.TYPE.WARNING;
        break;
      }

      default: toastOptions.type = toast.TYPE.INFO;
    }
    const toastID = toast(message, toastOptions);
  };

  return (
	<div>
		{getToast()}
		<ToastContainer
			draggable
			newestOnTop
			containerId="app-notification"
			limit={10}
			autoClose
		/>
	</div>
  );
};

ToastNotificaton.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ToastNotificaton;
