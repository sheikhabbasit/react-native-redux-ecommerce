import {ImagesActions} from '../Actions/ImagesActions';
import {getRandomDog} from '../../Network/APIRequest';

const initialState = {};

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

// Action creator code

// export const getImages = limit => {
//   return async dispatch => {
//     try {
//       const response = await getRandomDog(limit);
//       if (response.status === 'success')
//         dispatch({type: ImagesActions.STORE_DATA, data: response.message});
//     } catch (error) {
//       console.log('Fetch failed', error);
//     }
//   };
// };
