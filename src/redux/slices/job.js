/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    cost: 99.00,
    jobs: null,
    jobDrafts: [],
    currentJob: null,
  },

  reducers: {
    addNewJob: (state) => {
      state.cost += 3;
    },

    subtracJob: (state) => {
      state.cost -= 1;
    },

    addAsync: (state, action) => {
      state.cost += action.payload;
    },

    saveCurrentJobProgress: (state, action) => {
      const { payload } = action;
      if (payload !== null) {
        state.currentJob = { ...payload };
        // const { currentJob } = state;
        // currentJob.title = 'eben';
      }
    },

    addJobAsDraft: (state, action) => {
      if (action.payload) {
        let { jobDrafts } = state;
        if (jobDrafts !== null) {
          jobDrafts.push(action.payload);
        } else {
          jobDrafts = [action.payload];
        }
        state.jobDrafts = jobDrafts;
      }
    },

    removeAllJobDrafts: (state) => {
      state.jobDrafts = [];
    },
  },
});

export const {
  addNewJob, addJobAsDraft, saveCurrentJobProgress, removeAllJobDrafts,
} = jobSlice.actions;

// export const addNewJobAsDraft = (job) => (dispatch) => {
//   dispatch(addJobAsDraft(job));
// };


export const selectJobCount = (state) => state.job.cost;
export const selectJobDrafts = (state) => state.job.jobDrafts;
export const selectCurrentJob = (state) => state.job.currentJob;

export default jobSlice.reducer;
