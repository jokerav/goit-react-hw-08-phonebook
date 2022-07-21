import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contactsApi = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    signUpUser: builder.query({
      querry: user => ({
        url: '/users/signup',
        method: 'POST',
        body: { name: user.name, email: user.email, password: user.password },
      }),
    }),
  }),
});
export const { useSignUpUserMutation } = contactsApi;
