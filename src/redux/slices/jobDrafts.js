/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const jobSlice = createSlice({
  name: 'jobDrafts',
  initialState: [],

  reducers: {
    addJobAsDraft: (state, action) => {
      if (action.payload) {
        // let { jobDrafts } = state;
        if (state !== null) {
          state.push(action.payload);
        } else {
          state = [action.payload];
        }
        // state = jobDrafts;
      }
      
    },

    removeJobFromDrafts: (state, action) => {
      if (action.payload) {
        const jobs = state.filter((x) => x.uuid !== action.payload);
        state = jobs;
      }
    },

    removeAllJobDrafts: (state) => {
      state = [];
    },
  },
});

export const {
  addJobAsDraft, removeAllJobDrafts, removeJobFromDrafts,
} = jobSlice.actions;

export const selectJobDrafts = (state) => state.job.jobDrafts;

export default jobSlice.reducer;
