import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import rootReducer from './reducers';

const middleware = [thunk];
const enhancer = [applyMiddleware(...middleware)];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  enhancers: enhancer
});

export default store;
