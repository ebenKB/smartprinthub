import React from "react";
import { Button, Modal } from "semantic-ui-react"

const ConfirmationModal = ({ confirmButtonText, cancelButtonText, heading, children, ...rest }) => {

  const handleConfirmModalAction = () => {
    rest.handleConfirmAction();
    rest.closeAction();
  }

  return (
    <Modal title={heading} {...rest}>
      <Modal.Header>{heading}</Modal.Header>
      <Modal.Content className="m-t-50">
        {children}
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          negative
          type="button" 
          variant="primary" 
          className="m-l-8" 
          size="small"
          onClick={rest.closeAction}
          style={{marginRight: "20px"}}
        >
          {cancelButtonText}
        </Button>
        <Button 
          primary
          positive
          type="button" 
          className="m-l-8" 
          size="small"
          onClick={handleConfirmModalAction}
        >
          {confirmButtonText}
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ConfirmationModal;
