import React from "react";
import { Grid, Button, Modal } from "semantic-ui-react"
import ModalWrapper from "../ModalWrapper/ModalWrapper"

const ConfirmationModal = ({ confirmButtonText, cancelButtonText, heading, children, ...rest }) => {

  const handleConfirmModalAction = () => {
    rest.handleConfirmAction();
    rest.closeAction();
  }

  return (
    <ModalWrapper title={heading} {...rest}>
      <Modal.Actions>
        <Grid.Row>
          {children}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column
            width={16}
            textAlign="right"
            className="m-t-20"
            style={{textAlign: "center"}}
          >
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
          </Grid.Column>
        </Grid.Row>
      </Modal.Actions>
    </ModalWrapper>
  )
}

export default ConfirmationModal;
