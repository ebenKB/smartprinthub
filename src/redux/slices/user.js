import { createSlice } from '@reduxjs/toolkit';
import Axios from "utils/axios";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    accountType: 'user', // user or company
    role: 'user',
    email: '',
    phone: '',
    firstname: '',
    lastname: '',
    language: '',
    settings: {
      canShowIntro: false,
    },
  },
  reducers: {
    saveLoginInfo: (state, action) => {
      const {access_token} = action.payload;
      Axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      return ({
        ...state,
        isAuthenticated: true,
        ...action.payload,
        accountType: 1,
      });
    },

    logout: (state) => ({
      ...state,
      isAuthenticated: false,
    }),
  },
});

export const { saveLoginInfo, logout } = userSlice.actions;

export const saveAuthenticateUser = (data) => (dispatch) => {
  dispatch(saveLoginInfo(data));
};

export const selectAuthentication = (state) => state.user.isAuthenticated;
export const selectUserRole = (state) => state.user.role;
export const selectUserSettings = (state) => state.user.settings;
export const selectAccountType = (state) => state.user.accountType;
export const selectAccessToken = (state) => state.user.access_token;

export default userSlice.reducer;
