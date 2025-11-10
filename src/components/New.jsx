import Modal from "./Modal/Modal";
import BookForm from "./Bookform/Bookform";

function Add ({ onDelete, onAddBook, book, update, loans = [] }) {
  // Check if the selected book is currently on loan
  const isBookOnLoan = book && loans.some(loan => 
    (loan.book.isbn13 || loan.book.title) === (book.isbn13 || book.title)
  );

  return (
    <div className="button-group">
      <Modal btnLabel="Add" btnClassName="add-button">
        <BookForm add={onAddBook} />
      </Modal>
      
      <Modal 
        btnLabel="Edit" 
        btnClassName="update-button"
        disabled={isBookOnLoan}
      >
        <BookForm book={book} add={update}/>
      </Modal>
      
      <button 
        className={`delete-button ${isBookOnLoan ? 'disabled' : ''}`}
        onClick={onDelete} 
        title={isBookOnLoan ? "This book is on loan and cannot be deleted" : "Delete selected book"}
        disabled={isBookOnLoan}
      >
        Delete
      </button>
    </div>
  )
}

export default Add

