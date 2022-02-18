import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { loadState, saveState, debounce } from '../../utility';

const createStoreRedux = () => {
  const middlewares = [thunk];

  const store = createStore(
    rootReducer,
    loadState(),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};

const store = createStoreRedux();

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
