import {ThemeActions} from '../Actions/ThemeActions';

const initialState = {};

export const ThemeReducer = (state = {darkMode: false}, payload) => {
  switch (payload.type) {
    case ThemeActions.TOGGLE_THEME:
      console.log(!state.darkMode);

      return {...state, darkMode: !state.darkMode};

    default:
      return state;
  }
};
