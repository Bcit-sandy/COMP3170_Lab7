import { useState } from "react";
import Modal from "./Modal/Modal";
import BookForm from "./Bookform";

function Add ({ onUpdate, onDelete, onAddBook, onUpdateBook }) {
  const [editBook, setEditBook] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleUpdateClick = () => {
    const selectedBook = onUpdate();
    if (selectedBook) {
      setEditBook(selectedBook);
      setIsEditModalOpen(true);
    }
  };

  const handleEditSubmit = (updatedBook) => {
    if (onUpdateBook) {
      onUpdateBook(updatedBook);
    }
    setEditBook(null);
    setIsEditModalOpen(false);
  };

  const handleEditCancel = () => {
    setEditBook(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className="button-group">
      <Modal btnLabel="Add" btnClassName="add-button">
        <BookForm onAddBook={onAddBook} />
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

      {/* Edit Modal */}
      {isEditModalOpen && (
        <Modal 
          btnLabel="Edit" 
          btnClassName="edit-button"
          isOpen={isEditModalOpen}
          onClose={handleEditCancel}
        >
          <BookForm 
            onUpdateBook={handleEditSubmit}
            editBook={editBook}
            isEditMode={true}
          />
        </Modal>
      )}
    </div>
  )
}

export default Add