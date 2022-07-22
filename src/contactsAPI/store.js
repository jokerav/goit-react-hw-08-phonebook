import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filterSlice from './filterSlice';
import authSlice from './authSlice';
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
