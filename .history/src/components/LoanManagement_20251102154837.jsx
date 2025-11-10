import { useState } from "react";
import './LoanManagement.css';

function LoanManagement({ books, loans, onLoanChange, onQuit }) {
  const [borrowerName, setBorrowerName] = useState('');
  const [selectedBookForLoan, setSelectedBookForLoan] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');

  const handleLoanBook = (e) => {
    e.preventDefault();
    if (!borrowerName.trim() || !selectedBookForLoan || !loanPeriod) {
      alert('Please fill in all fields: borrower name, select a book, and loan period');
      return;
    }

    const period = parseInt(loanPeriod);
    if (period < 1 || period > 4) {
      alert('Loan period must be between 1 and 4 weeks');
      return;
    }

    const book = books.find(b => (b.isbn13 || b.title) === selectedBookForLoan);
    if (!book) return;

    // Check if book is already loaned
    const existingLoan = loans.find(loan => 
      (loan.book.isbn13 || loan.book.title) === selectedBookForLoan
    );

    if (existingLoan) {
      alert(`This book is already loaned to ${existingLoan.borrower}`);
      return;
    }

    const newLoan = {
      id: Date.now().toString(),
      book: book,
      borrower: borrowerName.trim(),
      loanPeriod: period,
      loanDate: new Date().toISOString().split('T')[0]
    };

    onLoanChange([...loans, newLoan]);
    setBorrowerName('');
    setSelectedBookForLoan('');
    setLoanPeriod('');
  };

//   const handleReturnBook = (loanId) => {
//     const updatedLoans = loans.filter(loan => loan.id !== loanId);
//     onLoanChange(updatedLoans);
//   };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const calculateReturnDate = (loanDate, loanPeriod) => {
    const date = new Date(loanDate);
    // Add weeks to the loan date (loanPeriod * 7 days)
    date.setDate(date.getDate() + (loanPeriod * 7));
    return formatDate(date.toISOString().split('T')[0]);
  };

  const availableBooks = books.filter(book => 
    !loans.some(loan => 
      (loan.book.isbn13 || loan.book.title) === (book.isbn13 || book.title)
    )
  );

  return (
    <div className="loan-management-container">
      <div className="loan-management-header">
        <h2 className="loan-management-title">Loan Management System</h2>
        <button 
          onClick={onQuit}
          className="quit-button"
        >
          Return to Book Listing
        </button>
      </div>
      
      <div className="loan-management-content">
        <div className="loan-form-section">
          <h3>Loan a Book</h3>
          <form onSubmit={handleLoanBook} className="loan-form">
            <div className="form-field">
              <label htmlFor="borrower-name">Borrower Name:</label>
              <input
                id="borrower-name"
                type="text"
                value={borrowerName}
                onChange={(e) => setBorrowerName(e.target.value)}
                placeholder="Enter borrower name"
                className="borrower-input"
              />
            </div>

            <div className="form-field">
              <label htmlFor="book-select">Select Book:</label>
              <select 
                id="book-select"
                value={selectedBookForLoan}
                onChange={(e) => setSelectedBookForLoan(e.target.value)}
                className="book-select"
              >
                <option value="">-- Select a book --</option>
                {availableBooks.map(book => (
                  <option 
                    key={book.isbn13 || book.title} 
                    value={book.isbn13 || book.title}
                  >
                    {book.title} by {book.author}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-field">
              <label htmlFor="loan-period">Loan Period (weeks):</label>
              <input
                id="loan-period"
                type="number"
                min="1"
                max="4"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(e.target.value)}
                placeholder="1-4 weeks"
                className="loan-period-input"
              />
            </div>
            
            <button type="submit" className="loan-button">
              Loan Book
            </button>
          </form>
        </div>

        <div className="loans-list-section">
          <h3>Current Loans ({loans.length})</h3>
          {loans.length === 0 ? (
            <p className="no-loans-message">No books currently on loan</p>
          ) : (
            <div className="loans-list">
              {loans.map(loan => (
                <div key={loan.id} className="loan-item">
                  <div className="loan-info">
                    <div className="loan-book-title">{loan.book.title}</div>
                    <div className="loan-book-author">by {loan.book.author}</div>
                    <div className="loan-details">
                      <span className="loan-borrower">Borrower: <b>{loan.borrower}</b></span>
                      <span className="loan-period">Period: <b>{loan.loanPeriod || 'N/A'} week(s)</b></span>
                      <span className="loan-date">Return by: <b>{loan.loanPeriod ? calculateReturnDate(loan.loanDate, loan.loanPeriod) : 'N/A'}</b></span>
                    </div>
                  </div>
                  {/* <button 
                    onClick={() => handleReturnBook(loan.id)}
                    className="return-button"
                  >
                    Return Book
                  </button> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoanManagement;

