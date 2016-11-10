import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
	// key of books tied to list of books in reducer_books.js
	books: BooksReducer

});

export default rootReducer;
