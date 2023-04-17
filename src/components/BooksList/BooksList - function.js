const BooksList = ({ books, removeBook }) => {
  return (
    <ul>
      {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => removeBook(book.id)}>Remove</button></li>)}
    </ul>
  );
};

export default BooksList;