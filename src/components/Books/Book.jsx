import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>{author}</div>
      <div>{title}</div>
      <button type="button" onClick={() => { dispatch(deleteBook(id)); }}>Remove</button>
    </div>
  );
}

export default Book;

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
