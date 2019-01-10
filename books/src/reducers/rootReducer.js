import { combineReducers } from 'redux';
import BookListReducer from './reducer-books';
import ActiveReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BookListReducer,
  title: ActiveReducer
});

export default rootReducer;