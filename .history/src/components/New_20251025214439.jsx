import { useState } from "react";
import Modal from "./Modal/Modal";
import BookForm from "./Bookform";

function Add ({ onUpdate, onDelete, onAddBook, onUpdateBook }) {
  const [editBook, setEditBook] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleUpdateClick = () => {
    const selectedBook = onUpdate();
    if (selectedBook) {
      setEditBook(selectedBook);
      setIsEditMode(true);
      // Open the modal programmatically
      const modal = document.querySelector('dialog');
      if (modal) {
        modal.showModal();
      }
    }
  };

  const handleEditSubmit = (updatedBook) => {
    if (onUpdateBook) {
      onUpdateBook(updatedBook);
    }
    setEditBook(null);
    setIsEditMode(false);
  };

  const handleAddClick = () => {
    setEditBook(null);
    setIsEditMode(false);
  };

  return (
    <div className="button-group">
      <Modal btnLabel="Add" btnClassName="add-button" onClick={handleAddClick}>
        <BookForm 
          onAddBook={onAddBook}
          onUpdateBook={handleEditSubmit}
          editBook={editBook}
          isEditMode={isEditMode}
        />
      </Modal>
      
      <button 
        className="update-button"
        onClick={handleUpdateClick}
        title="Update selected book"
      >
        Update
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