import shortid from 'shortid';

// selectors
export const getAllBooks = state => state.books;

// action names
const createActionName = name => `app/books/${name}`;
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const ADD_BOOK = createActionName('ADD_BOOK');
const UPDATE_BOOKS = createActionName('UPDATE_BOOKS');

// action creators
export const removeBook = payload => ({ type: REMOVE_BOOK, payload });
export const addBook = payload => ({ type: ADD_BOOK, payload });
export const updateBooks = payload => ({ type: UPDATE_BOOKS, payload });
export const fetchBooks = dispatch => {
  fetch('http://localhost:3131/books')
    .then(res => res.json())
    .then(books => dispatch(updateBooks(books)));
};

const booksReducer = (statePart = [], action) => {
  switch(action.type) {
    case REMOVE_BOOK:
      return statePart.filter(book => book.id !== action.payload)
    case ADD_BOOK:
      return [ ...statePart, { ...action.payload, id: shortid() }]
    case UPDATE_BOOKS:
      return [ ...action.payload]
    default:
      return statePart
  }
};

export default booksReducer;