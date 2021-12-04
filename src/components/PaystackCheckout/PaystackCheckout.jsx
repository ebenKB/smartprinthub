/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import { Button } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

const config = {
  reference: uuidv4(),
  // email: 'eakbo23@gmail.com',
  // amount: 100,
  publicKey: 'pk_test_5ff9213b0ad4c69886c3eb4450f8191ac899dc7f',
  currency: 'GHS',
};

// const InitializePayment = () => {
//   const startPayment = usePaystackPayment(config);
//   return (
// 	<div>
// 		<Button onClick={() => startPayment()}>
// 			Payment has Started
// 		</Button>
// 	</div>
//   );
// };

// const handleCloseAction = () => {
//   console.log('The paystack form has closed');
// };


// const handleSuccessAction = (reference) => {
//   console.log('The paystack payment was successful', reference);
// };

const PaystackCheckout = ({ handleSuccess, handleClose, handlePaymentClose, options }) => {
  const componentProps = {
    ...config,
    ...options,
    text: 'Paystack Button Implementation',
    onSuccess: (reference) => handleSuccess(reference),
    onClose: () => { handleClose(); handlePaymentClose()},
  };

  return (
	<div>
		{/* <InitializePayment />
		<PaystackButton {...componentProps} /> */}
		<PaystackConsumer {...componentProps}>
			{({ initializePayment }) => (
				<Button
					positive
					size="small"
					content="Pay And Send Job"
					onClick={() => { handleClose(); initializePayment()}}
				/>
			)}
		</PaystackConsumer>
	</div>
  );
};

PaystackCheckout.propTypes = {
  handleSuccess: PropTypes.func.isRequired,
  handleClose: PropTypes.func,
  options: PropTypes.object.isRequired,
};

PaystackCheckout.defaultProps = {
  handleClose: null,
};

export default PaystackCheckout;
