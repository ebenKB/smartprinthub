import { createSlice } from '@reduxjs/toolkit';
import { uuid } from 'uuidv4';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    pageTitle: 'Redux Dashboard',
    notification: null
  },
  reducers: {
    setNotification: (state, action) => {
      state.notification = {...action.payload, id: uuid()};
    },

    clearNotification: (state, action) => {
      // const notifications = state.notification.filter((x) => x.id !== action.payload);
      state.notification=null;
    }
  }
});

export const { setNotification, clearNotification }= appSlice.actions;

export const selectNotification = (state) => state.app.notification;
export default appSlice.reducer;
