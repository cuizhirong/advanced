import React from 'react';

const BookDetail = ({ book }) => (
  <div>
    <h3>BookDetail for:</h3>
    {
      book ? <div>
        <div>Title: { book.title }</div>
        <div>Pages: { book.pages }</div>
      </div> : null
    }
  </div>
);

export default BookDetail;