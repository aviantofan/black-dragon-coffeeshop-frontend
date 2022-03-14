import { combineReducers } from 'redux';
import auth from './auth';
import { productList } from './products';
import { deliveryMethods } from './deliveryMethods';

const rootReducer = combineReducers({
  auth,
  productList,
  deliveryMethods
});

export default rootReducer;
