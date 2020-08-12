/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import jobReducer from '../reducers/job';

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    cost: 99.00,
    jobs: null,
    jobDrafts: null,
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
      state.jobDrafts = null;
    },
  },
});

export const { addNewJob, addJobAsDraft, removeAllJobDrafts } = jobSlice.actions;

// export const addNewJobAsDraft = (job) => (dispatch) => {
//   dispatch(addJobAsDraft(job));
// };


export const selectJobCount = (state) => state.job.cost;
export const selectJobDrafts = (state) => state.job.jobDrafts;

export default jobSlice.reducer;
