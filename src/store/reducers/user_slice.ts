/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

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
  role: 'manager',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // to remove, when we set api and extra reducer for login
    login: (state, action: PayloadAction<Omit<User, 'loggedIn'>>) => {
      state.loggedIn = true;
      state.userId = action.payload.userId;
      state.login = action.payload.login;
      state.token = action.payload.token;
      state.status = action.payload.status;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.userId = undefined;
      state.login = undefined;
      state.token = undefined;
      state.status = 'idle';
    },
  },
  extraReducers: (/* builder */) => {
    // --->> add reducer for response from API
    // builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
    //  state.loggedIn = true;
    //  state.userId = action.payload.userId;
    //  state.login = action.payload.login;
    //  state.token = action.payload.token;
    //  state.status = action.payload.status;
  },
});

export const { login, logout } = UserSlice.actions;
export const userReducer = UserSlice.reducer;

export const selectUserUserId = (state: RootState) => state.user.userId;
export const selectUserIsLoggedIn = (state: RootState) => state.user.loggedIn;
export const selectUserResponseStatus = (state: RootState) => state.user.status;
export const selectUserResponseError = (state: RootState) => state.user.error;
export const selectUserLogin = (state: RootState) => state.user.login;
export const selectUserRole = (state: RootState) => state.user.role;
