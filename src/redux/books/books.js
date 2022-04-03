// Action Types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Initial State
const initialState = [
  {
    id: 1,
    author: 'Ben Carson',
    title: 'Gifted Hands',
  },
  {
    id: 2,
    author: 'Napoleon Hill',
    title: 'Think And Grow Rich',
  },
  {
    id: 3,
    author: 'John C. Maxwell',
    title: '21 irrefutable laws of leadership',
  },
];

// Action Creators
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

export default bookReducer;
