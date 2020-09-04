import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: true,
    role: 'regular',
    email: 'example@email.com',
    phone: '+233548086391',
    firstname: 'Samuel',
    lastname: 'Anderson',
    language: 'english',
  },
});

export const selectAuthentication = (state) => state.user.isAuthenticated;

export default appSlice.reducer;
