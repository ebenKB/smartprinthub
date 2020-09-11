import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    accountType: 'company',
    pageTitle: 'Redux Dashboard',
  },
});

export const selectAccountType = (state) => state.app.accountType;

export default appSlice.reducer;
