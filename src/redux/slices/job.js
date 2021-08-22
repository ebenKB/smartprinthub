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

    // subtracJob: (state) => {
    //   state.cost -= 1;
    // },

    addAsync: (state, action) => {
      state.cost += action.payload;
    },

    saveCurrentJobProgress: (state, action) => {
      const { payload } = action;
      if (payload !== null) {
        state.currentJob = { ...payload };
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
        // state.currentJob = null;
      }
    },

    removeJobFromDrafts: (state, action) => {
      if (action.payload) {
        const jobs = state.jobDrafts.filter((x) => x.uuid !== action.payload);
        state.jobDrafts = jobs;
      }
    },

    removeAllJobDrafts: (state) => {
      state.jobDrafts = [];
    },
  },
});

export const {
  addNewJob, addJobAsDraft, saveCurrentJobProgress, removeAllJobDrafts, removeJobFromDrafts,
} = jobSlice.actions;

export const selectJobCount = (state) => state.job.cost;
export const selectJobDrafts = (state) => state.job.jobDrafts;
export const selectCurrentJob = (state) => state.job.currentJob;

export default jobSlice.reducer;
