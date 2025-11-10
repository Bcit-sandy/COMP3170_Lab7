import Modal from "./Modal/Modal";
import BookForm from "./Bookform";

function Add ({ onUpdate, onDelete, onAddBook }) {
  return (
    <div className="button-group">
      <Modal btnLabel="Add" btnClassName="add-button">
        <BookForm onAddBook={onAddBook} />
      </Modal>
      
      <button 
        className="update-button"
        onClick={onUpdate}
        title="Update selected book"
      >
        Edit
      </button>
      
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