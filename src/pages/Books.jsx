import React from 'react';
import { useSelector } from 'react-redux';
import BookList from '../components/Books/BookList';
import BookForm from '../components/Books/BookForm';
// import LoadingScreen from '../components/Shared/LoadingScreen';

function Books() {
  // const [loadingBookData, setLoadingBookData] = useState(true);
  // const [bookData, setBookData] = useState([]);
  // const [categories, setCategories] = useState([]);

  const books = useSelector((state) => state.books);
  console.log(books);
  // useEffect(() => {
  //   setLoadingBookData(true);
  //   fetch('../data/books.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then((data) => {
  //       setBookData(data);
  //       setCategories([]);
  //     })
  //     .catch((error) => {
  //       console.log('Error loading data', error);
  //     })
  //     .finally(() => {
  //       setLoadingBookData(false);
  //     });
  // }, []);

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
