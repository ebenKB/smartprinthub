import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeAllJobDrafts, removeJobFromDrafts } from "redux/slices/jobDrafts";
import { Button, Grid, Icon } from 'semantic-ui-react';
import Divider from '../../components/AppDivider/AppDivider';
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const ViewJobDrafts = ({ jobs, setJobForEditing }) => {
  const [canEditJob, setCanEditJob] = useState(false);
  const [modalAction, setModalAction] = useState({ type: "", open: false });
  const [currentJob, setCurrentJob] = useState(null);
  const dispatch = useDispatch();

  const MODAL_ACTION_TYPES = {
    EDIT: "EDIT",
    DELETE_ONE: "DELETE_ONE",
    DELETE_ALL: "DELETE_ALL",
  }

  /**
   * Allow user to confirm editing job.
   * @param {*} job 
   */
  const handleEditClick = (job) => {
    setCurrentJob(job);
    setCanEditJob(!canEditJob);
    setModalAction({
      type: MODAL_ACTION_TYPES.EDIT,
      open: true,
    })
  }

  const handleDeleteAllClick = () => {
    setModalAction({
      type: MODAL_ACTION_TYPES.DELETE_ALL,
      open: true,
    })
  }

  const handleDeleteJobClick = (job) => {
    setModalAction({
      type: MODAL_ACTION_TYPES.DELETE_ONE,
      open: true,
    });
    setCurrentJob(job);
  }

  const deleteAllJobDrafts = () => {
    dispatch(removeAllJobDrafts())
  }

  const deleteSingleJobDraft = () => {
    dispatch(removeJobFromDrafts(currentJob.uuid))
  }

  const getModalAction = () => {
    switch (modalAction.type) {
      case MODAL_ACTION_TYPES.EDIT:
        return setJobForEditing(currentJob.uuid);
      
      case MODAL_ACTION_TYPES.DELETE_ALL:
        return deleteAllJobDrafts();
      
      case MODAL_ACTION_TYPES.DELETE_ONE:
        return deleteSingleJobDraft();
    
      default: return null;
    }
  }

  const getModalActionText = () => {
    switch(modalAction.type) {
      case MODAL_ACTION_TYPES.EDIT:
        return <>
          <h3>When you edit this job, the current job will be saved as draft.</h3>
          <p>Are you sure you want to edit this job?</p>
        </>
      
      case MODAL_ACTION_TYPES.DELETE_ALL:
        return <>
          <h3>This will remove all job drafts permanently</h3>
          <p>Do you want to continue?</p>
        </>
      
      case MODAL_ACTION_TYPES.DELETE_ONE:
        return <>
          <h3>You are about to permanently delete this job draft.</h3>
          <div className="m-t-10 m-b-10">
            <img src={currentJob.file} alt="" className="w-full" />
          </div>
          <p>Are you sure you want to continue?</p>
        </>
      
      default: return null;
    }
  }

  return (
    <Grid>
      <ConfirmationModal
        heading={modalAction.type === MODAL_ACTION_TYPES.EDIT ? "Edit Job" : "Delete Job Draft(s)"}
        confirmButtonText="Yes, continue"
        cancelButtonText="No, cancel"
        open={modalAction.open}
        // closeAction={() => setCanEditJob(!canEditJob)}
        closeAction={() => setModalAction({ open: false, type: "" })}
        // handleConfirmAction={() => modalAction.type === MODAL_ACTION_TYPES.EDIT ? setJobForEditing(currentJob.uuid) : deleteAllJobDrafts()}
        handleConfirmAction = {getModalAction}
      >
        {getModalActionText()}
      </ConfirmationModal>
      <ConfirmationModal>

      </ConfirmationModal>
      {/* <Grid.Row> */}
        {jobs && jobs.map((job) => (
          <Grid.Row>
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
                onClick={() => handleDeleteJobClick(job)}
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
          </Grid.Row>
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
      {/* </Grid.Row> */}
    </Grid>
  )
}

export default ViewJobDrafts;
