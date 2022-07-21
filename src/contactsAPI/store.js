import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filterSlice from './filterSlice';
import loggedInSlice from './loggedInSlice';
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice,
    isLoggedIn: loggedInSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
