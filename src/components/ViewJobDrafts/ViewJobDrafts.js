import React from "react";
import { useState } from "react";
import { Button, Grid, Icon } from 'semantic-ui-react';
import Divider from '../../components/AppDivider/AppDivider';
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const ViewJobDrafts = ({ jobs, setJobForEditing }) => {
  const [canEditJob, setCanEditJob] = useState(false);
  const [modalAction, setModalAction] = useState({ type: "", open: false });
  const [currentJob, setCurrentJob] = useState(null);
  const MODAL_ACTION_TYPES = {
    EDIT: "EDIT",
    DELETE_ALL: "DELETE_ALL"
  }

  const handleEditClick = (job) => {
    setCurrentJob(job);
    setCanEditJob(!canEditJob);
    setModalAction({
      type: MODAL_ACTION_TYPES.EDIT,
      open: true,
    })
  }

  const handleDeleteAllClick = () => {
    console.log("We want to delete all")
    setModalAction({
      type: MODAL_ACTION_TYPES.DELETE_ALL,
      open: true,
    })
  }

  const deleteAllJobDrafts = () => {
    console.log("We want to delete all drafts")
  }

  return (
    <Grid>
      <ConfirmationModal
        heading={modalAction.type === MODAL_ACTION_TYPES.EDIT ? "Edit Job" : "Delete Job Drafts"}
        confirmButtonText="Yes, continue"
        cancelButtonText="No, cancel"
        open={modalAction.open}
        // closeAction={() => setCanEditJob(!canEditJob)}
        closeAction={() => setModalAction({ open: false, type: "" })}
        handleConfirmAction={() => modalAction.type === MODAL_ACTION_TYPES.EDIT ? setJobForEditing(currentJob.uuid) : deleteAllJobDrafts()}
      >
        {modalAction.type === MODAL_ACTION_TYPES.EDIT ? (
          <>
            <h3>When you edit this job, the current job will be saved as draft.</h3>
            <p>Are you sure you want to edit this job?</p>
          </>
        ) : (
          <>
            <h3>This will remove all job drafts permanently</h3>
            <p>Do you want to continue?</p>
          </>
        )}
      </ConfirmationModal>
      <Grid.Row>
        {jobs && jobs.map((job) => (
          <>
            <Grid.Column width={10}>
              <h3>{job.title}</h3>
            </Grid.Column>
            <Grid.Column width={6} className="text-right">
              <Button
                basic
                type="button" 
                variant="text" 
                className="m-l-8" 
                size="mini"
                style={{marginRight: "20px"}}
              >
                <Icon name="trash" />
                Delete
              </Button>
              <Button 
                basic
                type="button" 
                variant="text" 
                className="m-l-8" 
                size="mini"
                onClick={() => handleEditClick(job)}
              >
                <Icon name="edit" />
                Edit
              </Button>
            </Grid.Column>
            <Grid.Row className="w-full m-t-10 m-b-10 p-all-10">
              <Grid.Column width={16}>
                <Divider type="thick" className="m-b-10 m-t-10" />
              </Grid.Column>
            </Grid.Row>
          </>
        ))}
        <Grid.Row className="w-full m-t-20 m-b-10 p-all-10 text-right">
          <Grid.Column width={16}>
            <Button basic danger size="small" >
              <Icon name="close" />
              Cancel
            </Button>
            <Button 
              basic 
              danger 
              color="red" 
              size="small"
              onClick={handleDeleteAllClick}
            >
              <Icon name="trash "/>
              Delete all
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid.Row>
    </Grid>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteAllJobDrafts: () => dispatch({
    // type: 
  })
})
export default ViewJobDrafts;