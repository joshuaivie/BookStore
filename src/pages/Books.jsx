import React from 'react';
import { useSelector } from 'react-redux';
import BookList from '../components/Books/BookList';
import BookForm from '../components/Books/BookForm';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {/* {loadingBookData ? <LoadingScreen /> : ( */}
      <div>
        {' '}
        <BookList books={books} />
        {' '}
        <BookForm categories={[]} />
      </div>
      {/* )} */}
    </div>
  );
}

export default Books;
