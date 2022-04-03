import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books }) {
  return (
    <ul className="flex">
      {books.map((book) => (
        <Book
          author={book?.author}
          title={book?.title}
          id={book?.id}
          key={book?.id}
          category={book?.category}
          progress={`${Math.floor(Math.random() * 100) + 1}%`}
        />
      ))}
    </ul>

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
