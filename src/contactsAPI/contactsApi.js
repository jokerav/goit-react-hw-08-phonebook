import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contactsApi = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['contacts', 'user'],
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: { name: user.name, email: user.email, password: user.password },
        invalidatesTags: ['user'],
      }),
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
    }),
  }),
});
export const { useSignUpUserMutation, useLogInUserMutation } = contactsApi;
