import { combineReducers } from 'redux';
import addSymbol from './addSymbol';
import removeSymbol from './removeSymbol';


const rootReducer = combineReducers({
  addSymbol,
  removeSymbol
});

export default rootReducer;