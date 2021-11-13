import { createSlice } from '@reduxjs/toolkit';
import { uuid } from 'uuidv4';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    pageTitle: 'Redux Dashboard',
    notification: null,
    menuCollapsed: false,
  },
  reducers: {
    setNotification: (state, action) => {
      state.notification = {...action.payload, id: uuid()};
    },

    clearNotification: (state, action) => {
      // const notifications = state.notification.filter((x) => x.id !== action.payload);
      state.notification=null;
    },

    toggleNavMenu: (state, action) => {
      state.menuCollapsed = !state.menuCollapsed;
    }
  }
});

export const { setNotification, clearNotification, toggleNavMenu } = appSlice.actions;

export const selectMenuState = (state) => state.app.menuCollapsed;
export const selectNotification = (state) => state.app.notification;
export default appSlice.reducer;
