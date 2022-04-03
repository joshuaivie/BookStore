import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

function Book({
  id, title, author, category, progress,
}) {
  const dispatch = useDispatch();
  return (
    <li className="book-container">
      <div className="book-header">
        <span className="book-header-category">{category}</span>
        <h3 className="book-header-title">{title}</h3>
        <p className="book-header-author">{author}</p>
        <div className="book-header-buttons flex">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(deleteBook(id))}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-data flex">
        <div className="book-progress flex">
          <div className="book-progress-bar">
            <div className="inner" />
            <div className="circle">
              <div className="bar left">
                <div className="progress" />
              </div>
              <div className="bar right">
                <div className="progress" />
              </div>
            </div>
          </div>
          <div className="book-progress-value">
            <h3 className="book-progress-value-progressage">{progress}</h3>
            <p className="book-progress-value-completed">Completed</p>
          </div>
        </div>
        <div className="book-chapter flex">
          <span className="book-chapter-title">CURRENT CHAPTER</span>
          <span className="book-chapter-current">
            Chapter-
            {progress}
          </span>
          <button className="book-chapter-update" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
}

export default Book;

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};
