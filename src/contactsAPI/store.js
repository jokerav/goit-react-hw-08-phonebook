import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filterSlice from './filterSlice';
import authSlice from './authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const contactsPersistConfig = {
  key: 'auth',
  storage,
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice,
    auth: persistReducer(contactsPersistConfig, authSlice),
  },
  middleware,

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(contactsApi.middleware),
});
const persistor = persistStore(store);
export { store, persistor };
