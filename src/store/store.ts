import { combineReducers, configureStore, type PreloadedState } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import loggerMiddleware from 'redux-logger';
import { userApi } from 'services/user/userApi';
import { votingApi } from 'services/voting/votingApi';
import { residentApi } from 'services/resident/residentApi';

import { flatApi } from 'services/flat/flatApi';
import { managerApi } from 'services/manager/managerApi';
import {
  residentReducer,
  buildingReducer,
  userReducer,
  flatReducer,
  votingsReducer,
} from './reducers/index';

import { managerReducer } from './reducers/manager/manager_slice';

export const rootReducer = combineReducers({
  user: userReducer,
  resident: residentReducer,
  manager: managerReducer,
  building: buildingReducer,
  flat: flatReducer,
  voting: votingsReducer,
  [userApi.reducerPath]: userApi.reducer,
  [votingApi.reducerPath]: votingApi.reducer,
  [flatApi.reducerPath]: flatApi.reducer,
  [managerApi.reducerPath]: managerApi.reducer,
  [residentApi.reducerPath]: residentApi.reducer,
});

// Adding the api middleware enables caching, invalidation, polling,
// and other useful features of `rtk-query`.
export const rootMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    loggerMiddleware,
    userApi.middleware,
    flatApi.middleware,
    managerApi.middleware,
    votingApi.middleware,
    residentApi.middleware,
  );

export type RootState = ReturnType<typeof rootReducer>;

const storeInit = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: rootMiddleware,
    preloadedState,
  });

export const reduxStore = storeInit();

export type AppStore = ReturnType<typeof storeInit>;
export type AppDispatch = AppStore['dispatch'];
