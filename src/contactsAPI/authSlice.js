import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedin: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn(state, action) {
      state.isLoggedin = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loggedOut(state, _) {
      state.isLoggedin = false;
      state.user = null;
      state.token = null;
    },
  },
});
export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
