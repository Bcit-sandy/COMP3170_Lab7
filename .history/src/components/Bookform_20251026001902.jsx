import { useState } from "react";
import { nanoid } from "nanoid";

function BookForm({book, add}) {
    function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const bookData = {
            title: data.get('title'),
            author: data.get('author'),
            publisher: data.get('publisher'),
            year: data.get('year'),
            language: data.get('language'),
            pages: data.get('pages'),
            image: data.get('image'),
        };

        console.log("Book data:", bookData);

        // Add additional properties for new books
        if (!book) {
            bookData.url = '#';
            bookData.isbn13 = nanoid();
            bookData.selected = false;
        } else {
            // For editing, preserve the original book's properties
            bookData.isbn13 = book.isbn13;
            bookData.url = book.url;
            bookData.selected = book.selected;
        }

        console.log("Calling add function with:", bookData);
        add(bookData);
        e.target.reset();

        // Close modal
        const modal = document.querySelector('dialog[open]');
        if (modal) {
            modal.close();
        }
    }

    return (
        <div className="form-container">
            <h2> {book ? 'Edit book' : 'Add a new book'} </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control"> 
                    <label htmlFor="title"> Title </label>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title..." 
                        defaultValue={book?.title}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="author"> Author </label>
                    <input 
                        type="text" 
                        name="author" 
                        placeholder="Author..." 
                        defaultValue={book?.author}
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="publisher"> Publisher </label>
                    <input 
                        type="text" 
                        name="publisher" 
                        placeholder="Publisher..." 
                        defaultValue={book?.publisher}
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="year"> Publication Year </label>
                    <input 
                        type="number" 
                        name="year" 
                        placeholder="Publication Year..." 
                        defaultValue={book?.year}
                        min="1000"
                        max="2025"
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="language"> Language </label>
                    <input 
                        type="text" 
                        name="language" 
                        placeholder="Language..." 
                        defaultValue={book?.language}
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="pages"> Pages </label>
                    <input 
                        type="number" 
                        name="pages" 
                        placeholder="Pages..." 
                        defaultValue={book?.pages}
                        min="1"
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="image"> Image URL </label>
                    <input 
                        type="url" 
                        name="image" 
                        placeholder="https://..." 
                        defaultValue={book?.image}
                    />
                </div>

                <button className="btn primary" type="submit"> 
                    {book ? 'Update' : 'Submit'} 
                </button>
            </form>
        </div>
    );
}

export default BookForm;