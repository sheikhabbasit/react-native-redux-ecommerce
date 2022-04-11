import {call, put} from 'redux-saga/effects';
import {getImagesSaga} from '../Requests/ImageRequest';
import {storeImages} from '../../Reducer/ImagesReducer';
import {throwError} from '../../Reducer/ImagesReducer';

export function* handleImagesSaga(action) {
  try {
    const response = yield call(getImagesSaga);
    console.log('status', response.status);
    if (response.status === 'success') {
      yield put(storeImages(response.message));
    } else {
      throw new Error(response.message);
    }
  } catch (error) {
    yield put(throwError(error));
  }
}
