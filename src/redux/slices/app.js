import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    accountType: 'user',
  },
});

export const selectAccountType = (state) => state.app.accountType;

export default appSlice.reducer;
