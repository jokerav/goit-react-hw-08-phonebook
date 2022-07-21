import { createSlice } from '@reduxjs/toolkit';
const initialState = false;
const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    loggedIn(_, action) {
      return action.payload;
    },
    loggedOut(_, action) {
      return action.payload;
    },
  },
});
export const { loggedIn, loggedOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;
