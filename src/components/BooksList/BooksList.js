import React from 'react';

class BooksList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => this.props.removeBook(book.id)}>Remove</button></li>)}
      </ul>
    );
  };

}

export default BooksList;