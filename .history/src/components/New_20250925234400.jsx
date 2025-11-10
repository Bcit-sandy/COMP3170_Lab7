import Modal from "./Modal/Modal";

function Add () {
  return (
    <Modal btnLabel="New" btnClassName="add-button">
      <BookForm />
    </Modal>
  )
}

export default Add