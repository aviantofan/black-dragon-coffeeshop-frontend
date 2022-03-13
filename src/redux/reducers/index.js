import { combineReducers } from 'redux';
import auth from './auth';
import { productList } from './products';

const rootReducer = combineReducers({
  auth,
  productList
});

export default rootReducer;
