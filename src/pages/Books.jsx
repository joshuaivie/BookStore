import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from '../components/Books/BookList';
import BookForm from '../components/Books/BookForm';
import { getBooks } from '../redux/books/books';

function Books() {
  const bookState = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const { books, loading } = bookState;
  const catagories = ['Fiction', 'Business', 'Spiritual', 'Romance', 'Tech'];

  return (
    <div>
      {loading ? '' : (
        <div>
          {' '}
          <BookList books={books} />
          {' '}
          <BookForm categories={catagories} />
        </div>
      )}
    </div>
  );
}

export default Books;
