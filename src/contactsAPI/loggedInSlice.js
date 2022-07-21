import { createSlice } from '@reduxjs/toolkit';
const initialState = false;
const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    loggedIn(state, action) {
      return true;
    },
    loggedOut(state, action) {
      return false;
    },
  },
});
export const { loggedIn, loggedOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;
