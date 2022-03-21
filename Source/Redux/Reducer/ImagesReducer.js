import {ImagesActions} from '../Actions/ImagesActions';
import {getRandomDog} from '../../Network/APIRequest';

const initialState = {};

export const getImages = (state = initialState, action) => ({
  type: ImagesActions.GET_DATA,
});

export const storeImages = data => {
  return {type: ImagesActions.STORE_DATA, payload: data};
};

export const ImagesReducer = (state = {images: []}, payload) => {
  switch (payload.type) {
    case ImagesActions.STORE_DATA:
      return {...state, images: payload.payload};
    case ImagesActions.REMOVE_DATA:
      return initialState;

    default:
      return initialState;
  }
};
