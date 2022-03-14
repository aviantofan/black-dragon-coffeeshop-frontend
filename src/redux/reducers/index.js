import { combineReducers } from 'redux';
import { productDetail } from './products';
import { deliveryMethods } from './deliveryMethods';

const rootReducer = combineReducers({
  productDetail,
  deliveryMethods
});

export default rootReducer;
