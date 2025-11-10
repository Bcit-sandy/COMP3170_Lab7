import Modal from "./Modal/Modal";
import BookForm from "./Bookform";

function Add ({ onDelete, onAddBook, book, update }) {
  return (
    <div className="button-group">
      <Modal btnLabel="Add" btnClassName="add-button">
        <BookForm onAddBook={onAddBook} />
      </Modal>
      
      <Modal btnLabel="Edit" btnClassName="update-button">
        <BookForm book={book} add={update}/>
      </Modal>
      
      <button 
        className="delete-button"
        onClick={onDelete} 
        title="Delete selected book"
      >
        Delete
      </button>
    </div>
  )
}

export default Add

