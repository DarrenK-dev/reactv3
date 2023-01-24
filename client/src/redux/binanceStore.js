import {configureStore} from '@reduxjs/toolkit';
import symbolsReducer from './symbols';


const store = configureStore({
  reducer: {
    symbols: symbolsReducer,
  }
});

export default store;