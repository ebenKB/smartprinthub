/* eslint-disable import/prefer-default-export */
import { jobSlice } from '../slices/job';

export const { addAsync } = jobSlice.actions;

export const asyncAdd = () => (dispatch, getState) => {
  console.log(getState());
  dispatch(addAsync(0.5));
};
