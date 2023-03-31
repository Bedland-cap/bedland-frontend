/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { userApi } from 'services/user/userApi';
import type { RootState } from 'store/store';

const userRole = ['manager', 'resident', undefined] as const;
export type UserRoles = (typeof userRole)[number];

export type User = {
  loggedIn: boolean;
  status: string;
  error?: string;
  userId?: string;
  login?: string;
  token?: string;
  role: UserRoles;
};

const initialState: User = {
  loggedIn: false,
  status: 'idle',
  error: undefined,
  userId: undefined,
  login: undefined,
  token: undefined,
  role: 'resident',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserRole: (state, action) => {
      state.role = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.loggedIn = true;
      state.status = 'active';
      state.role = payload.role;
      state.login = payload.login;
      state.token = payload.token;
      state.userId = payload.id;
    });
    builder.addMatcher(userApi.endpoints.loginAndGetUser.matchFulfilled, (state, { payload }) => {
      state.loggedIn = true;
      state.status = 'active';
      state.role = payload.role;
      state.login = payload.login;
      state.token = payload.token;
      state.userId = payload.id;
    });
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
      state.loggedIn = false;
      state.userId = undefined;
      state.login = undefined;
      state.token = undefined;
      state.status = 'idle';
    });
  },
});

export const userReducer = UserSlice.reducer;
export const { updateUserRole } = UserSlice.actions;

export const selectUserUserId = (state: RootState) => state.user.userId;
export const selectUserIsLoggedIn = (state: RootState) => state.user.loggedIn;
export const selectUserResponseStatus = (state: RootState) => state.user.status;
export const selectUserResponseError = (state: RootState) => state.user.error;
export const selectUserLogin = (state: RootState) => state.user.login;
export const selectUserRole = (state: RootState) => state.user.role;
