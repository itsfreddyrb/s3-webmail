import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './root-reducer';

const logger = createLogger({
  colors: false,
});

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

export default store;
