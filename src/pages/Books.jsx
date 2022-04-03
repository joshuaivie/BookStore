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

  const { books, loading, error } = bookState;
  const catagories = ['Fiction', 'Business', 'Spiritual', 'Romance', 'Tech'];

  return (
    <>
      {error ? (<div>{error}</div>) : ''}
      {loading ? '' : (
        <section className="booklist flex">
          {' '}
          <BookList books={books} />
          {' '}
          <BookForm categories={catagories} />
        </section>
      )}
    </>
  );
}

export default Books;
