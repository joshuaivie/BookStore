// Action Types
const CHECK_STATUS = 'CHECK_STATUS';

// Initial State
const initialState = [];

// Action Creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Reducers
const statusReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default statusReducer;
