import BooksList from "./components/BooksList/BooksList";
import BookForm from "./components/BookForm/BookForm";

const App = () => {
  return (
    <div>
      <h1>Books App</h1>
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;