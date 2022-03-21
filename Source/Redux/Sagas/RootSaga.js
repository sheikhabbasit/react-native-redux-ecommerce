import {takeLatest} from 'redux-saga/effects';
import {ImagesActions} from '../Actions/ImagesActions';
import {handleImagesSaga} from './Handlers/ImageHandler';

export function* watcherSaga() {
  yield takeLatest(ImagesActions.GET_DATA, handleImagesSaga);
}
