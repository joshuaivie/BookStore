import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books }) {
  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book?.id}>
            <Book author={book?.author} title={book?.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};
