import { combineReducers } from 'redux';
import auth from './auth';
import { productList } from './products';
import { deliveryMethods } from './deliveryMethods';
import productDetail from './productDetail';
import size from './size';
import dataChart from './dataChart';

const rootReducer = combineReducers({
  auth,
  productList,
  productDetail,
  deliveryMethods,
  size,
  dataChart
});

export default rootReducer;
