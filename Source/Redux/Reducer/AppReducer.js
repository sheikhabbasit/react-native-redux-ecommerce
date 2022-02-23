import {AppActions} from '../Actions/AppActions';

const initialState = {
  userInfo: {},
};

export const AppReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case AppActions.LOGIN:
      return {...state, userInfo: payload.data};

    case AppActions.UPDATE_INFO:
      return {...state, userInfo: payload.data};

    case AppActions.LOGOUT:
      return {...initialState};

    default:
      return state;
  }
};
