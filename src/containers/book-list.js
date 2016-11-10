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
               <li key={book.title} className="list-group-item">{book.title}</li>     
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

function mapStateToProps(state) {
  //Whatever gets returned here will show up as props in BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  //Second argument is the action creator that was imported at the top
  return bindActionCreators({selectBook: selectBook}, dispatch});
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

