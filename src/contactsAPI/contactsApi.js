import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['contacts', 'user'],
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: { name: user.name, email: user.email, password: user.password },
      }),
      invalidatesTags: ['user'],
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
      invalidatesTags: ['user'],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        method: 'POST',
        url: '/users/logout',
      }),
      invalidatesTags: ['user'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        method: 'POST',
        url: '/contacts',
        body: { name: contact.name, number: contact.number },
      }),
      invalidatesTags: ['contacts'],
    }),
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'GET',
      }),
      providesTags: ['contacts'],
    }),
  }),
});
export const {
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useAddContactMutation,
  useGetContactsQuery,
} = contactsApi;
