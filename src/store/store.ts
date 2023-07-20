import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import routerReducer from './reducers/routerSlice';
import requestListReducer from './reducers/routesListSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: routerReducer,
  requestList: requestListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(sagaMiddleware),
});

export type AppRootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
