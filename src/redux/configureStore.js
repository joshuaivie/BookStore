import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({ books: bookReducer, status: statusReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
