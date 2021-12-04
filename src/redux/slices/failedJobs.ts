import { createSlice } from "@reduxjs/toolkit";

export const failedJobSlice = createSlice({
  name: "failedJobs",
  initialState: [],

  reducers: {
    addFailedJob: (state: string[], action) => {
      const data  = [...state, action.payload];
      state =data;
    },
  }
})

export const { addFailedJob } = failedJobSlice.actions;
export default failedJobSlice.reducer;
