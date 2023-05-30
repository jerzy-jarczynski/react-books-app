import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllBooks, removeBook } from '../../redux/booksRedux';

const BooksList = () => {

  const books = useSelector(getAllBooks);

  const dispatch = useDispatch();

  const handleClick = bookId => {
    dispatch(removeBook(bookId));
  };

  return (
    <ul>
      {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => handleClick(book.id)}>Remove</button></li>)}
    </ul>
  );

};

export default BooksList;