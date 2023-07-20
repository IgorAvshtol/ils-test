import { all } from 'redux-saga/effects';
import routerSaga from './sagas/routerSaga';
import routesListSaga from './sagas/routesListSaga';

export default function* rootSaga() {
  yield all([routerSaga(), routesListSaga()]);
}
