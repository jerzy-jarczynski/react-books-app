import { legacy_createStore as createStore, combineReducers } from 'redux';
import initialState from './initialState';
import booksReducer from './booksRedux';

const reducer = combineReducers({
  books: booksReducer
});

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

export default store;