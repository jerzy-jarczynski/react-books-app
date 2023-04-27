import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const BooksList = () => {

  const books = useSelector(state => state.books);

  const dispatch = useDispatch();

  const removeBook = bookId => {
    dispatch({ type: 'REMOVE_BOOK', payload: bookId })
  };

  return (
    <ul>
      {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => removeBook(book.id)}>Remove</button></li>)}
    </ul>
  );

};

export default BooksList;