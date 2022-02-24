import {combineReducers, createStore} from 'redux';
import {AppReducer} from './Reducer/AppReducer';
import {CartReducer} from './Reducer/CartReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const AllReducers = {
  app: AppReducer,
  cart: CartReducer,
};

const PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app', 'cart'],
};
const mergedReducer = combineReducers(AllReducers);
const persistedReducer = persistReducer(PersistConfig, mergedReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
