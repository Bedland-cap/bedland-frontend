import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Resident } from 'store/reducers/resident/resident_slice';
import type { User, UserRoles } from 'store/reducers/user/user_slice';
import type { RootState } from 'store/store';
import { BASE_URL } from 'utils/constans';

export type Manager = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type LoginRequest = {
  login: string;
  password: string;
  role: UserRoles;
};
export type LogoutRequest = Pick<User, 'login' | 'role'>;
export type LoginResponse = {
  status: string;
  data: { message: string };
  token: string;
  id: string;
  login: string;
  role: UserRoles;
};
export type LogoutResponse = {
  status: string;
  data: { message: string };
};
export type UserResponse = (Manager & User) | (Resident & User);

// Since we have two different names on FE and BE for resident/member, we need to resolve it
const resolveUserRole = (user: LoginRequest | LogoutRequest) =>
  user.role === 'resident' ? 'member' : 'manager';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const { token } = (getState() as RootState).user;
      if (token) {
        headers.set('authentication', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (user) => ({
        url: `${resolveUserRole(user)}/login`,
        method: 'POST',
        body: user,
      }),
    }),
    loginAndGetUser: builder.mutation<UserResponse, LoginRequest>({
      async queryFn(queryArg, _queryApi, _extraOptions, fetchWithBaseQuery) {
        const user = queryArg;

        const loginResponse = await fetchWithBaseQuery({
          url: `${resolveUserRole(user)}/login`,
          method: 'POST',
          body: user,
        });

        if (loginResponse.error) return { error: loginResponse.error };

        const userInfo = loginResponse.data as LoginResponse;

        const userDetails = await fetchWithBaseQuery({
          url: `${resolveUserRole(user)}/${userInfo.id}`,
          method: 'GET',
        });

        if (userDetails.error) return { error: userDetails.error };

        return { data: userDetails.data as UserResponse };
      },
    }),
    logout: builder.mutation<LogoutResponse, LogoutRequest>({
      query: (user) => ({
        url: `${resolveUserRole(user)}/logout`,
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

// Export hooks which are auto-generated based on the defined endpoints
// for usage in functional components
// https://redux-toolkit.js.org/rtk-query/usage/queries#frequently-used-query-hook-return-values
// https://redux-toolkit.js.org/rtk-query/usage/mutations#frequently-used-mutation-hook-return-values
export const { useLoginMutation, useLogoutMutation, useLoginAndGetUserMutation } = userApi;
