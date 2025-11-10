import { useState } from "react";
import Book from "./components/Book";
import Add from "./components/New";
import Main from "./components/Main";
import data from "../data/books.json";

function App() {
  const [books, setBooks] = useState(data);

  function getBooks(bookData) {
    return <Book key={bookData.title} data={bookData} onRemove={handleRemoveBook} />
  }

  function handleRemoveBook(bookId) {
    setBooks(prevBooks => prevBooks.filter(book => 
      (book.id || book.title) !== bookId
    ));
  }

  return (
    <div>
      <header className="app-header">
       <h1 className="app-name">Book Catalog</h1>
      </header>

      <main className="app-main">
        <div className="app-main-content">
          <p className="app-main-content-text">Welcome to the Book Catalog! 📘  </p>
          <p className="app-main-content-text">Feel free to click at <span className="learn-more">Learn More</span> to view detailed information of each book! 📖 </p>
        </div>

        <div className="app-content-container">
          <div className="add-button-column">
            <Add />
          </div>
          <Main>
            {data.map(getBooks)}
          </Main>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; Sandy Chow, Set G, 2025</p>
      </footer> 
    </div>

  )
}

export default App;



