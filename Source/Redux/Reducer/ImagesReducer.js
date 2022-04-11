import {ImagesActions} from '../Actions/ImagesActions';

const initialState = {};

export const getImages = (state = initialState, action) => ({
  type: ImagesActions.GET_DATA,
});

export const storeImages = data => {
  return {type: ImagesActions.STORE_DATA, payload: data};
};

export const throwError = error => {
  return {type: ImagesActions.THROW_ERROR, error: error};
};

export const ImagesReducer = (
  state = {images: [], error: null, errorState: false},
  payload,
) => {
  switch (payload.type) {
    case ImagesActions.STORE_DATA:
      return {...state, images: payload.payload};
    case ImagesActions.REMOVE_DATA:
      return initialState;

    case ImagesActions.THROW_ERROR:
      console.log('errorpayload', payload.error);
      return {...state, error: payload.error.message, errorState: true};

    case ImagesActions.CLEAR_ERROR:
      console.log('clear error');
      return {...state, error: null, errorState: false};

    default:
      return state;
  }
};
