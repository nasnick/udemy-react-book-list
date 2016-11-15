import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
	// key of books tied to list of books in reducer_books.js
	// Any key provided to combineReducers ends up as a key on global state
	books: BooksReducer,
	activeBook: ActiveBook

});

export default rootReducer;
