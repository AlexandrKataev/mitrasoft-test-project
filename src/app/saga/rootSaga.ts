import { all } from 'redux-saga/effects';
import commentSaga from './commentSaga';
import postSaga from './postSaga';

export default function* rootSaga() {
  yield all([commentSaga(), postSaga()]);
}
