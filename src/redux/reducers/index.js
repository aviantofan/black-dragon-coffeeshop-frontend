import { combineReducers } from 'redux';
import auth from './auth';
import { productList, productDetail } from './products';
import { deliveryMethods } from './deliveryMethods';

const rootReducer = combineReducers({
  auth,
  productList,
  productDetail,
  deliveryMethods
});

export default rootReducer;
