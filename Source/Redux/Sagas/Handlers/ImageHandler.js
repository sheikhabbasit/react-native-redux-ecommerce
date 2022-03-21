import {call, put} from 'redux-saga/effects';
import {getImagesSaga} from '../Requests/ImageRequest';
import {storeImages} from '../../Reducer/ImagesReducer';

export function* handleImagesSaga(action) {
  try {
    const response = yield call(getImagesSaga);
    console.log('saga response', response);
    yield put(storeImages(response.message));
  } catch (error) {
    console.log(error);
  }
}
