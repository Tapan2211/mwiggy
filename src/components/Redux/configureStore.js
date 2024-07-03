import { createStore } from 'redux';
import rootReducer from './RootReducer';

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export default configureStore;

// import { createStore } from 'redux';
// import counterReducer from './reducers';

// const store = createStore(counterReducer);

// export default store;