import React from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import { connect } from 'react-redux';
import { selectBook } from '../actions/action';
import { bindActionCreators } from "redux";

const App = ({ books, book, onClick }) => {
  return <div>
    <BookList books={books} onClick={onClick}/>
    <BookDetail book={book}/>
  </div>
};

function selectedBook(state) {
  return state.books.filter(book => book.title === state.title)[0];
}

const mapStateToProps = (state) => ({
  books: state.books,
  book: selectedBook(state)
});

const mapDispatchToProps = dispatch => {
  //onClick: title => dispatch(selectBook(title))
  return bindActionCreators({ onClick: selectBook }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);