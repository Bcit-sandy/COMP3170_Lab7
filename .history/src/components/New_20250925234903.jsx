import Modal from "./Modal/Modal";
import BookForm from "./BookForm";

function Add () {
  return (
    <div>
      <Modal btnLabel="New" btnClassName="add-button">
        <BookForm />
      </Modal>
    </div>
  )
}

export default Add