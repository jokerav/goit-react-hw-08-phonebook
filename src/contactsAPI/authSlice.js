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
    },
    loggedOut(state, action) {
      state.isLoggedin = false;
    },
  },
});
export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
