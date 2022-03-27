import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <div>{author}</div>
      <div>{title}</div>
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
