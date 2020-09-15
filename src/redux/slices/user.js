import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
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
  reducers: {
    login: (state, action) => {
      const {
        email, phone, firstname, lastname,
      } = action.payload;
      return ({
        ...state,
        isAuthenticated: true,
        email,
        phone,
        lastname,
        firstname,
      });
    },
    logout: (state) => ({
      ...state,
      isAuthenticated: false,
    }),
  },
});

export const { login, logout } = userSlice.actions;

export const authenticateUser = (user) => (dispatch) => {
  // authenticate the user from the api here
  dispatch(login(user));
};

export const selectAuthentication = (state) => state.user.isAuthenticated;
export const selectUserRole = (state) => state.user.role;
export const selectUserSettings = (state) => state.user.settings;


export default userSlice.reducer;
