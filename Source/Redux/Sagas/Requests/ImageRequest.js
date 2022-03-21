import {getRandomDog} from '../../../Network/APIRequest';

export function getImagesSaga() {
  return getRandomDog(10);
}
