import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const createStoreRedux = () => {
  const middlewares = [thunk];

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export default createStoreRedux();
