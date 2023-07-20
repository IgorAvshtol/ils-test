import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import routerApi from 'api/routerApi';
import { ResponseSaga, Route } from 'interfaces';
import { routerActions } from '../reducers/routerSlice';
import { SagaActions } from './types';

function* fetchRoute(action: PayloadAction<Route>) {
  try {
    const response: ResponseSaga = yield call(routerApi.getRoute, action.payload);
    yield put(routerActions.fetchRouteSuccess({ ...response, ...action.payload }));
  } catch (error: any) {
    yield put(routerActions.fetchRouteFailed(error));
  }
}

export default function* routerSaga() {
  yield takeLatest(SagaActions.GET_ROUTE, fetchRoute);
}
