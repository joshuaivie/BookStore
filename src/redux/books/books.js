// API Details
const BASE_URL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi";
const APP_ID = "arrz8I7wZ7aa2xj4Zgph";
const ENDPOINT_GET_BOOKS = (baseurl, appID) => `${baseurl}/apps/${appID}/books`;
const ENDPOINT_POST_BOOK = (baseurl, appID) => `${baseurl}/apps/${appID}/books`;
const ENDPOINT_DELETE_BOOK = (baseurl, appID, bookID) =>
  `${baseurl}/apps/${appID}/books/${bookID}`;

// Action Types
const FETCH_BOOKS_BEGIN = "bookstore/books/FETCH_BOOKS_BEGIN";
const FETCH_BOOKS_SUCCESS = "bookstore/books/FETCH_BOOKS_SUCESS";
const FETCH_BOOKS_FAILURE = "bookstore/books/FETCH_BOOKS_FAILURE";
const ADD_BOOK_BEGIN = "bookstore/books/ADD_BOOK_BEGIN";
const ADD_BOOK_SUCCESS = "bookstore/books/ADD_BOOK_SUCESS";
const ADD_BOOK_FAILURE = "bookstore/books/ADD_BOOK_FAILURE";
const REMOVE_BOOK_BEGIN = "bookstore/books/REMOVE_BOOK_BEGIN";
const REMOVE_BOOK_SUCCESS = "bookstore/books/REMOVE_BOOK_SUCESS";
const REMOVE_BOOK_FAILURE = "bookstore/books/REMOVE_BOOK_FAILURE";

// Initial State
const initialState = {
  items: [],
  loading: false,
  error: null,
};

// Reducers
const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
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
  payload: { books },
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: { error },
});

export const addBook = ({ id, author, title }) => ({
  type: ADD_BOOK,
  payload: {
    id,
    author,
    title,
  },
});

export const removeBook = (id) => {
  console.log(id);
  return {
    type: REMOVE_BOOK,
    payload: id,
  };
};

// Side Effects
export function fetchBooks() {
  return (dispatch) => {
    dispatch(fetchBooksBegin());
    const url = ENDPOINT_GET_BOOKS(BASE_URL, APP_ID);
    return fetch(url)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchBooksSuccess(json.books));
        return json.books;
      })
      .catch((error) => dispatch(fetchBooksFailure(error)));
  };
}

export default bookReducer;
