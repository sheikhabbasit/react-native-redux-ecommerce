import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {AppReducer} from './Reducer/AppReducer';
import {CartReducer} from './Reducer/CartReducer';
import {ThemeReducer} from './Reducer/ThemeReducer';
import {ImagesReducer} from './Reducer/ImagesReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AllReducers = {
  app: AppReducer,
  cart: CartReducer,
  theme: ThemeReducer,
  images: ImagesReducer,
};

const PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app', 'cart', 'theme'],
};
const mergedReducer = combineReducers(AllReducers);
const persistedReducer = persistReducer(PersistConfig, mergedReducer);
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
