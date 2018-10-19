import {
  all,
  delay,
  fork,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  addToClipboard,
  updateDisplayValue,
} from './actions';
import {
  INPUT_CHANGE,
} from './actionTypes';

function* handleInputChange({ payload: { value } }) {
  yield put(updateDisplayValue({ value }));

  yield delay(500);

  yield put(addToClipboard({ value: btoa(value) }));
}

function* watchInputChange() {
  yield takeLatest(INPUT_CHANGE, handleInputChange);
}

export default function* rootSaga() {
  yield all([
    fork(watchInputChange),
  ]);
}
