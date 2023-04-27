import BooksList from "./components/BooksList/BooksList";
import BookForm from "./components/BookForm/BookForm";
import React, { useState } from 'react';
import shortid from 'shortid';

class App extends React.Component {

  state = {
    books: [
      { id: 1, title: 'of Mice and Men', author: 'John Steinbeck' },
      { id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski' }
    ]
  };

  removeBook = bookId => {
    this.setState({ books: this.state.books.filter(book => book.id !== bookId) });
  };

  addBook = newBook => {
    this.setState({ books: [...this.state.books, { id: shortid(), title: newBook.title, author: newBook.author }] });
  };

  render() {
    const { books } = this.state;
    const { addBook, removeBook } = this;

    return (
      <div>
        <h1>Books App</h1>
        <BooksList books={books} removeBook={removeBook} />
        <BookForm addBook={addBook} />
      </div>
    );
  }
}

export default App;