import {ThemeActions} from '../Actions/ThemeActions';

const initialState = {
  darkMode: false,
};

export const ThemeReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case ThemeActions.TOGGLE_THEME:
      return {...state, darkMode: !state.darkMode};

    default:
      return state;
  }
};
