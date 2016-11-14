//Container is a component that has direct access to state produced by redux
// Containers are connected to state
// Redux generated a state object that contained books and mapped them to props to component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// Ensures that the action created from action creators flow to all reducers
import { bindActionCreators } from 'redux';

//removed export statement here because we want to export the container
//not the component
class BookList extends Component {
	renderList() {
    // Books coming from index.js which come from reducer_books.js
		return this.props.books.map((book) => {
			return (
               <li 
                 key={book.title}
                 onClick={() => this.props.selectBook(book)}
                 className="list-group-item">
                 {book.title}
               </li>     
				);
		});
	}
    render() {
    	return (
          <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
    		)
    }
}

// Props inside of bookList
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Props available to bookList container
function mapDispatchToProps(dispatch){
  //selectBook is the action creator that was imported at the top
  //whenever SelectBook is called, the result will be passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote bookList from component to container - new dispatch method selectBook 
// made available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

