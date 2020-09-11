import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: true,
    role: 'user',
    email: 'example@email.com',
    phone: '+233548086391',
    firstname: 'Samuel',
    lastname: 'Anderson',
    language: 'english',
    settings: {
      canShowIntro: false,
    },
  },
});

export const selectAuthentication = (state) => state.user.isAuthenticated;
export const selectUserRole = (state) => state.user.role;
export const selectUserSettings = (state) => state.user.settings;

export default appSlice.reducer;
