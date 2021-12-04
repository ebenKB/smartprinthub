import React, { useState } from "react";
import ConfirmationModal from "components/ConfirmationModal/ConfirmationModal";
import { Button, Modal } from "semantic-ui-react";
import PaystackCheckoutComponent from 'components/PaystackCheckout/PaystackCheckout';
import { Job } from "types/job.type";
import ImageSlider from "components/ImagePreviewSlider/ImageSlider";

type Props= {
  handleCancelAction: () => void,
  handleConfirmAction: (ref: any) => void,
  handlePaymentActionClose: () => void,
  options: {amount: number},
  open: boolean,
  jobs: Job[]
}

const ConfirmJobCheckout = ({handleCancelAction, handleConfirmAction, handlePaymentActionClose, options, open, jobs}: Props) => {
  
  const handlePaymentSuccess = (ref:any) => {
    handleCancelAction();
    handleConfirmAction(ref);
  }

  return (
    <Modal title="Pay and send job" open={open}>
      <Modal.Header>Pay and send job</Modal.Header>
      <Modal.Content className="m-t-50">
        <p>You are about to send a new job to 
          <b>{" "}Hub KB.S Company Limited, Circle</b>
        </p>
          <ImageSlider jobs={jobs}/>
        <h3>You will be charged GHS{options.amount}</h3>
      </Modal.Content>
      <Modal.Actions>
        <div className="flex-inline">
          <Button
            basic
            negative
            type="button" 
            variant="primary" 
            className="m-l-8" 
            size="small"
            onClick={() => {handleCancelAction(); /*handlePaymentActionClose()*/}}
            style={{marginRight: "20px"}}
          >
            No, cancel
          </Button>
          <PaystackCheckoutComponent
            handleSuccess={handlePaymentSuccess}
            handleClose={() => {handleCancelAction();}}
            handlePaymentClose={handlePaymentActionClose}
            options={options}
          />
        </div>
      </Modal.Actions>
    </Modal>
  )
}

export default ConfirmJobCheckout;
