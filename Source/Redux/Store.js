import {combineReducers, createStore} from 'redux';
import {AppReducer} from './Reducer/AppReducer';

const AllReducers = {
  app: AppReducer,
};

const mergedReducer = combineReducers(AllReducers);

export const store = createStore(mergedReducer);
