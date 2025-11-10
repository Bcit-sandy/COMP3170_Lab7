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
    if (selectedBook) {
      // TODO: Implement update functionality
      console.log("Update book:", selectedBook);
      alert("Update functionality will be implemented here");
    } else {
      alert("Please select a book to update");
    }
  }

  function handleDeleteBook() {
    if (selectedBook) {
      if (window.confirm(`Are you sure you want to delete "${selectedBook.title}"?`)) {
        setBooks(prevBooks => prevBooks.filter(book => 
          (book.id || book.title) !== (selectedBook.id || selectedBook.title)
        ));
        setSelectedBook(null);
      }
    } else {
      alert("Please select a book to delete");
    }
  }

  function handleAddBook(newBook) {
    setBooks(prevBooks => [...prevBooks, newBook]);
    setSelectedBook(newBook); // Auto-select the newly added book
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



