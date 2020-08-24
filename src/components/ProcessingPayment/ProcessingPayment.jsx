/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Input } from 'semantic-ui-react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Spinner from '../Spinner/Spinner';
import './ProcessingPayment.scss';
import Divider from '../divider/divider';

const ProcessingPayment = () => (
	<ModalWrapper>
		<div className="payment_wrapper">
			<div className="loader-caption">
				<Spinner />
				<h3>Processing payment</h3>
			</div>
			<div>
				<div className="m-t-20 m-b-20">
					<label htmlFor="authorization">Enter the Authorization token sent to your phone</label>
					<Input fluid type="text" name="authorization" />
				</div>
				<Divider type="thick" />
				<h3>Instructions</h3>
				<p>If you do not recieve any promp on your phone,</p>
				<ol>
					<li>Dial *170#</li>
					<li>Go to My Wallet</li>
					<li>Go to My Approvals</li>
					<li>Select option to approved transacton</li>
				</ol>
			</div>
		</div>
	</ModalWrapper>
);

export default ProcessingPayment;
