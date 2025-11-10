import { useState } from "react";
import Book from "./components/Book";
import Add from "./components/New";
import Main from "./components/Main";
import data from "../data/books.json";

function App() {
  const [books, setBooks] = useState(data);

  function getBooks(bookData) {
    return (
      <Book 
        key={bookData.title} 
        data={bookData} 
        onToggleSelection={handleBookToggleSelection}
      />
    );
  }

  function handleBookToggleSelection(clickedBook) {
    setBooks(prevBooks => 
      prevBooks.map(book => ({
        ...book,
        selected: book === clickedBook ? !book.selected : false
      }))
    );
  }

  function handleUpdateBook() {
    const selectedBook = books.find(book => book.selected);
    if (selectedBook) {
      // TODO: Implement update functionality
      console.log("Update book:", selectedBook);
      alert("Update functionality will be implemented here");
    } else {
      alert("Please select a book to update");
    }
  }

  function handleDeleteBook() {
    const selectedBook = books.find(book => book.selected);
    if (selectedBook) {
      if (window.confirm(`Are you sure you want to delete "${selectedBook.title}"?`)) {
        setBooks(prevBooks => prevBooks.filter(book => !book.selected));
      }
    } else {
      alert("Please select a book to delete");
    }
  }

  function handleAddBook(newBook) {
    setBooks(prevBooks => {
      // First, unselect all books
      const unselectedBooks = prevBooks.map(book => ({ ...book, selected: false }));
      // Then add the new book and select it
      return [...unselectedBooks, { ...newBook, selected: true }];
    });
  }

  return (
    <div>
      <header className="app-header">
       <h1 className="app-name">Book Catalog</h1>
      </header>

      <main className="app-main">

        <div className="app-content-container">
          <div className="add-button-column">
            <Add 
              onUpdate={handleUpdateBook}
              onDelete={handleDeleteBook}
              onAddBook={handleAddBook}
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



