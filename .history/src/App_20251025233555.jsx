import { useState } from "react";
import Book from "./components/Book";
import Add from "./components/New";
import Main from "./components/Main";
import data from "../data/books.json";
import Filter from "./components/Filter";

function App() {
  const [books, setBooks] = useState(data);
  const [selectedBook, setSelectedBook] = useState(null);

  function getBooks(bookData) {
    const isSelected = selectedBook && (selectedBook.isbn13 || selectedBook.title) === (bookData.isbn13 || bookData.title);
    return (
      <Book 
        key={bookData.isbn13 || bookData.title} 
        data={bookData} 
        onSelect={handleBookSelection}
        isSelected={isSelected}
      />
    );
  }

  function handleBookSelection(book) {
    // If clicking the same book that's already selected, unselect it
    if (selectedBook && (selectedBook.isbn13 || selectedBook.title) === (book.isbn13 || book.title)) {
      setSelectedBook(null);
    } else {
      // Otherwise, select the clicked book
      setSelectedBook(book);
    }
  }

  function handleUpdateBook(updatedBook) {
    setBooks(prevBooks => 
      prevBooks.map(book => 
        (book.isbn13 || book.title) === (updatedBook.isbn13 || updatedBook.title) 
          ? updatedBook 
          : book
      )
    );
    setSelectedBook(updatedBook);
  }

  function handleDeleteBook() {
    if (selectedBook) {
      setBooks(prevBooks => prevBooks.filter(book => 
          (book.isbn13 || book.title) !== (selectedBook.isbn13 || selectedBook.title)
        ));
        setSelectedBook(null);
    } else {
      alert("Please select a book to delete");
    }
  }

  function handleAddBook(newBook) {
    setBooks(prevBooks => [...prevBooks, newBook]);
  }

  return (
    <div>
      <header className="app-header">
       <h1 className="app-name">Book Catalog</h1>
      </header>
      <Filter filter={filter} setFilter={setFilter} categories={categories} />
      <main className="app-main">

        <div className="app-content-container">
          <div className="add-button-column">
            <Add 
              onDelete={handleDeleteBook}
              onAddBook={handleAddBook}
              book={selectedBook}
              update={handleUpdateBook}
            />
          </div>
          <Main>
            {books.map(getBooks)}
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



