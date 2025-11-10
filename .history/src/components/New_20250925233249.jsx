import Modal from "./Modal/Modal";

function Add () {
  return (
    <Modal btnLabel="New" btnClassName="add-button">
      <form method="dialog" className="new-book-form">
        <h2>Create New Book</h2>

        <label>
          Title
          <input name="title" type="text" placeholder="Book title" required />
        </label>

        <label>
          Author
          <input name="author" type="text" placeholder="Author name" required />
        </label>

        <label>
          Publisher
          <input name="publisher" type="text" placeholder="Publisher" required />
        </label>

        <label>
          Publication Year
          <input name="year" type="number" min="0" max="9999" placeholder="e.g., 2021" required />
        </label>

        <label>
          Language
          <input name="language" type="text" placeholder="Language" required />
        </label>

        <label>
          Pages
          <input name="pages" type="number" min="1" placeholder="Number of pages" required />
        </label>

        <div className="modal-actions">
          <button className="button-secondary" value="cancel">Cancel</button>
          <button className="button-primary" value="submit">Save</button>
        </div>
      </form>
    </Modal>
  )
}

export default Add