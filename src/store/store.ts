// eslint-disable-next-line import/no-extraneous-dependencies
import { enhancer as withReduxEnhancer } from 'addon-redux';
import { combineReducers, configureStore, type PreloadedState } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import loggerMiddleware from 'redux-logger';
import { userApi } from 'services/user/userApi';
import { residentReducer, buildingReducer, userReducer } from './reducers/index';

export const rootReducer = combineReducers({
  user: userReducer,
  resident: residentReducer,
  building: buildingReducer,
  [userApi.reducerPath]: userApi.reducer,
});

// Adding the api middleware enables caching, invalidation, polling,
// and other useful features of `rtk-query`.
export const rootMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware().concat(loggerMiddleware, userApi.middleware);

const createEnhancer = () => {
  const enhancers = [];
  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(withReduxEnhancer);
  }
  return enhancers;
};

export type RootState = ReturnType<typeof rootReducer>;

const storeInit = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: rootMiddleware,
    preloadedState,
    enhancers: (defaultEnhancers) => [...createEnhancer(), ...defaultEnhancers],
  });

export const reduxStore = storeInit();

export type AppStore = ReturnType<typeof storeInit>;
export type AppDispatch = AppStore['dispatch'];
