import {
  all,
  call,
  fork,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';

import {
  updateEncodedValue,
} from './actions';
import {
  ENCODING_TYPE,
} from './constants';
import {
  INPUT_CHANGE,
  UPDATE_ENCODING_END_TYPE,
  UPDATE_ENCODING_START_TYPE,
} from './actionTypes';
import {
  getEncodedValue,
} from './selectors';

function* encodeValue({ startType, startValue, endType }) {
  if (startType === ENCODING_TYPE.TEXT) {
    if (endType === ENCODING_TYPE.BASE_64) {
      yield put(updateEncodedValue({
        startType,
        startValue,
        endType,
        endValue: btoa(startValue),
      }));
    }
  }

  if (startType === ENCODING_TYPE.BASE_64) {
    if (endType === ENCODING_TYPE.TEXT) {
      yield put(updateEncodedValue({
        startType,
        startValue,
        endType,
        endValue: atob(startValue),
      }));
    }
  }
}

function* handleInputChange({ payload: { value } }) {
  const encodedValue = yield select(getEncodedValue);
  yield call(encodeValue, {
    startType: encodedValue.startType,
    startValue: value,
    endType: encodedValue.endType,
  });
}

function* handleEncodingStartTypeChange({ payload: { encodingStartType } }) {
  const encodedValue = yield select(getEncodedValue);
  yield call(encodeValue, {
    startType: encodingStartType,
    startValue: encodedValue.startValue,
    endType: encodedValue.endType,
  });
}

function* handleEncodingEndTypeChange({ payload: { encodingEndType } }) {
  const encodedValue = yield select(getEncodedValue);
  yield call(encodeValue, {
    startType: encodedValue.startType,
    startValue: encodedValue.startValue,
    endType: encodingEndType,
  });
}

function* watchInputChange() {
  yield takeLatest(INPUT_CHANGE, handleInputChange);
}

function* watchEncodingStartTypeChange() {
  yield takeLatest(UPDATE_ENCODING_END_TYPE, handleEncodingEndTypeChange);
}

function* watchEncodingEndTypeChange() {
  yield takeLatest(UPDATE_ENCODING_START_TYPE, handleEncodingStartTypeChange);
}

export default function* rootSaga() {
  yield all([
    fork(watchInputChange),
    fork(watchEncodingStartTypeChange),
    fork(watchEncodingEndTypeChange),
  ]);
}
