import { useState, useEffect } from 'react';
import './SimilarBook.css';

function SimilarBook({ query }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSimilarBooks() {
      if (!query) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const trimmedQuery = query.trim();
        if (!trimmedQuery) {
          setLoading(false);
          return;
        }
        
        // Use first word if query is long
        const queryWords = trimmedQuery.split(/\s+/);
        const searchTerm = queryWords.length <= 2 ? trimmedQuery : queryWords[0];
        const encodedQuery = encodeURIComponent(searchTerm);
        
        // Use proxy in development, direct API in production
        const useProxy = import.meta.env.DEV;
        const apiUrl = useProxy 
          ? `/api/itbook/1.0/search/${encodedQuery}`
          : `https://api.itbook.store/1.0/search/${encodedQuery}`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Get first 6 books
        const limitedBooks = data.books && Array.isArray(data.books) ? data.books.slice(0, 6) : [];
        setBooks(limitedBooks);
      } catch (err) {
        console.error('Failed to fetch similar books:', err);
        setError('Failed to load similar books');
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchSimilarBooks();
  }, [query]);

  if (!query) {
    return null;
  }

  if (loading) {
    return (
      <div className="similar-books-container">
        <h3 className="similar-books-title">Similar Books</h3>
        <p className="similar-books-loading">Loading similar books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="similar-books-container">
        <h3 className="similar-books-title">Similar Books</h3>
        <p className="similar-books-error">{error}</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="similar-books-container">
        <h3 className="similar-books-title">Similar Books</h3>
        <p className="similar-books-empty">No similar books found</p>
      </div>
    );
  }

  return (
    <div className="similar-books-container">
      <h3 className="similar-books-title">Similar Books</h3>
      <div className="similar-books-grid">
        {books.map((book) => (
          <div key={book.isbn13} className="similar-book-item">
            <div className="similar-book-image">
              {book.image ? (
                <img 
                  src={book.image} 
                  alt={book.title} 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x200?text=No+Image';
                  }}
                />
              ) : (
                <div className="similar-book-placeholder">No Image</div>
              )}
            </div>
            <div className="similar-book-info">
              <h4 className="similar-book-title">{book.title}</h4>
              {book.url && (
                <a 
                  href={book.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="similar-book-link"
                >
                  View Details
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarBook;

