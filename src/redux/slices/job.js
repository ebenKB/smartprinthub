/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { PaperSizeType } from 'enums/PaperSizeType.enum';
import { defaultJob } from 'utils/job';

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    cost: 0.00,
    userJobs: null,
    jobDrafts: [],
    currentJob: {
      ...defaultJob
    },
    jobsReadyForProcessing: [],
  },

  reducers: {
    addNewJob: (state) => {
      state.cost += 3;
    },

    addAsync: (state, action) => {
      state.cost += action.payload;
    },

    saveCurrentJobProgress: (state, action) => {
      const { payload } = action;
      if (payload !== null) {
        state.currentJob = { ...payload };
      }
    },

    // addJobAsDraft: (state, action) => {
    //   if (action.payload) {
    //     let { jobDrafts } = state;
    //     if (jobDrafts !== null) {
    //       jobDrafts.push(action.payload);
    //     } else {
    //       jobDrafts = [action.payload];
    //     }
    //     state.jobDrafts = jobDrafts;
    //   }
    // },

    resetCurrentJob: (state, action) => {
      state.currentJob= defaultJob;
    },

    // removeJobFromDrafts: (state, action) => {
    //   if (action.payload) {
    //     const jobs = state.jobDrafts.filter((x) => x.uuid !== action.payload);
    //     state.jobDrafts = jobs;
    //   }
    // },

    // removeAllJobDrafts: (state) => {
    //   state.jobDrafts = [];
    // },

    saveUserJobs: (state, action) => {
      if (action.payload) {
        state.userJobs = action.payload
      }
    }
  },
});

export const {
  addNewJob, saveCurrentJobProgress, saveUserJobs, resetCurrentJob,
} = jobSlice.actions;

export const selectJobCount = (state) => state.job.cost;
export const selectCurrentJob = (state) => state.job.currentJob;
export const selectJobs = (state) => state.job.userJobs;

export default jobSlice.reducer;
