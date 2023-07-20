import { call, put, takeLatest } from 'redux-saga/effects';
import requestApi from 'api/requestApi';
import { ResponseSaga } from 'interfaces';
import { requestListActions } from '../reducers/routesListSlice';
import { SagaActions } from './types';

function* fetchRoutesList() {
  try {
    const response: ResponseSaga = yield call(requestApi.getAll);
    yield put(requestListActions.fetchRequestListSuccess(response));
  } catch (error: any) {
    yield put(requestListActions.fetchRequestListFailed(error));
  }
}

export default function* routesListSaga() {
  yield takeLatest(SagaActions.GET_ROUTES, fetchRoutesList);
}
