import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length > 0
        ? (
          <ul>
            {books.map((book) => (
              <li key={book?.id}>
                <Book author={book?.author} title={book?.title} id={book?.id} />
              </li>
            ))}
          </ul>
        )
        : <div>No Books Yet</div>}
    </div>
  );
}

export default BookList;

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};
