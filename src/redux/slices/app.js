import { createSlice } from '@reduxjs/toolkit';
import { uuid } from 'uuidv4';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    pageTitle: 'Dashboard',
    notification: null,
    menuCollapsed: false,
    progress: {
      status: false,
      value: 10,
      total: 0,
      loaded: 0,
    }
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
    },

    setAppProgress: (state, action) => {
      const progress = action.payload;
      let value = (progress.loaded/progress.total) * 100;
      state.progress = {
        status: value < 100 ? true : true,
        value,
        total: progress.total,
        loaded: progress.loaded,
      }
    },

    showAppProgress: (state) => {
      state.progress = {
        status: true,
        value: 10,
      }
    },

    hideAppProgress: (state) => {
      state.progress = {
        status: false,
        value: 0,
      }
    },
  }
});

export const { setNotification, clearNotification, toggleNavMenu, setAppProgress, showAppProgress, hideAppProgress, } = appSlice.actions;

export const selectMenuState = (state) => state.app.menuCollapsed;
export const selectNotification = (state) => state.app.notification;
export const selectAppProgress = (state) => state.app.progress;
export default appSlice.reducer;
