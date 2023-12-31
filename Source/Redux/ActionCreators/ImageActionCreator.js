import {ImagesActions} from '../Actions/ImagesActions';
import {getRandomDog} from '../../Network/APIRequest';

export const fetchImagesList = () => {
  return async dispatch => {
    const response = await getRandomDog(20);
    if (response.status === 'success') {
      dispatch({type: ImagesActions.STORE_DATA, payload: response.message});
    }
  };
};
