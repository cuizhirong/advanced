import React from 'react';

const BookList = ({ books, onClick }) => (
  <ul>{books.map((book, index) => <li key={index} onClick={() => onClick(book.title)}>{book.title}</li>)}</ul>
);

export default BookList;