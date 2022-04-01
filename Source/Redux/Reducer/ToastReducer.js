import {ToastActions} from '../Actions/ToastActions';

const initialState = {
  message: '',
  toastState: false,
  errorState: false,
};

export const ToastReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case ToastActions.SET_LOGIN_ERROR:
      return {
        ...state,
        message: payload.data,
        toastState: true,
        errorState: true,
      };

    case ToastActions.SET_LOGIN_SUCCESSFUL:
      return {
        ...state,
        message: 'Login Successful',
        toastState: true,
        errorState: false,
      };

    case ToastActions.CLEAR:
      return {...state, message: '', toastState: false, errorState: false};

    default:
      return state;
  }
};
