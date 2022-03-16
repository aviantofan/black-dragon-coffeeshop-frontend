import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';

const { ENVIRONMENT } = process.env;

let store;

if (ENVIRONMENT === 'development') {
  store = createStore(
    rootReducer,
    applyMiddleware(
      promise,
      logger
    )
  );
} else {
  store = createStore(
    rootReducer,
    applyMiddleware(
      promise
    )
  );
}

export default store;
