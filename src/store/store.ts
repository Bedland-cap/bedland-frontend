import {
  combineReducers,
  configureStore,
  type PreloadedState,
} from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import loggerMiddleware from 'redux-logger';
import {
  residentReducer,
  buildingReducer,
  userReducer,
} from './reducers/index';

export const rootReducer = combineReducers({
  user: userReducer,
  resident: residentReducer,
  building: buildingReducer,
});

export const rootMiddleware = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware,
) => getDefaultMiddleware().concat(loggerMiddleware);

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
