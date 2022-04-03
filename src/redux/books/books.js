// API Details
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'arrz8I7wZ7aa2xj4Zgph';
const ENDPOINT_GET_BOOKS = (baseurl, appID) => `${baseurl}/apps/${appID}/books`;
const ENDPOINT_POST_BOOK = (baseurl, appID) => `${baseurl}/apps/${appID}/books`;
const ENDPOINT_DELETE_BOOK = (baseurl, appID, bookID) => `${baseurl}/apps/${appID}/books/${bookID}`;

// Action Types
const FETCH_BOOKS_BEGIN = 'bookstore/books/FETCH_BOOKS_BEGIN';
const FETCH_BOOKS_SUCCESS = 'bookstore/books/FETCH_BOOKS_SUCESS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const BOOKS_ERROR = 'bookstore/books/BOOKS_ERROR';

// Initial State
const initialState = {
  books: [],
  loading: true,
  error: null,
};

// Reducers
const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// Action Creators
export const fetchBooksBegin = () => ({
  type: FETCH_BOOKS_BEGIN,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const booksError = (error) => ({
  type: BOOKS_ERROR,
  payload: { error },
});

export const addBook = ({
  id, author, title, category,
}) => ({
  type: ADD_BOOK,
  payload: {
    id,
    author,
    title,
    category,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// Side Effects
export const getBooks = () => async (dispatch) => {
  dispatch(fetchBooksBegin());
  const url = ENDPOINT_GET_BOOKS(BASE_URL, APP_ID);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const res = response;
    const json = await res.json();
    const books = Object.entries(json);
    const processedBooks = books.map((book) => ({
      id: book[0],
      title: book[1][0].title,
      author: book[1][0].author,
      category: book[1][0].category,
    }));
    dispatch(fetchBooksSuccess(processedBooks));
    return json.books;
  } catch (error) {
    return dispatch(booksError(error));
  }
};

export const postBook = ({
  id, title, author, category,
}) => {
  const book = {
    id, title, author, category,
  };
  return async (dispatch) => {
    const data = {
      item_id: id, title, author, category,
    };
    const url = ENDPOINT_POST_BOOK(BASE_URL, APP_ID);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(addBook(book));
      return book;
    } catch (error) {
      return dispatch(booksError(error));
    }
  };
};

export const deleteBook = (id) => async (dispatch) => {
  const data = { item_id: id };
  const url = ENDPOINT_DELETE_BOOK(BASE_URL, APP_ID, id);
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    dispatch(removeBook(id));
    return id;
  } catch (error) {
    return dispatch(booksError(error));
  }
};

export default bookReducer;
