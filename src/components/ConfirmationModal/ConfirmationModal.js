import React from "react";
import { Button, Modal } from "semantic-ui-react"

const ConfirmationModal = ({ confirmButtonText, cancelButtonText, heading, children, loading, ...rest }) => {

  const handleConfirmModalAction = () => {
    rest.handleConfirmAction();
    // if (!loading) {
    //   rest.closeAction();
    // }
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
          size="small"
          onClick={rest.closeAction}
          style={{marginRight: "10px"}}
        >
          {cancelButtonText}
        </Button>
        <Button 
          primary
          positive
          type="button" 
          size="small"
          onClick={handleConfirmModalAction}
          loading={loading}
          disabled={loading}
        >
          {confirmButtonText}
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ConfirmationModal;
