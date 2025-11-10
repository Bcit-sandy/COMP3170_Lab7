import { useState } from "react";
import { nanoid } from "nanoid";

function BookForm({book, add}) {
    function handleSubmit(e) {
        e.preventDefault();

        const data=new FormData(e.target);

    const [formData, setFormData] = useState({
        title: book?.title || '',
        author: book?.author || '',
        publisher: book?.publisher || '',
        year: book?.year || '',
        language: book?.language || '',
        pages: book?.pages || '',
        image: book?.image || ''
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (book) {
            // Edit mode - update existing book
            const updatedBook = {
                ...book,
                title: formData.title,
                author: formData.author,
                publisher: formData.publisher,
                year: formData.year,
                language: formData.language,
                pages: formData.pages,
                image: formData.image
            };
            add(updatedBook);
        } else {
            // Add mode - create new book
            const newBook = {
                title: formData.title,
                author: formData.author,
                publisher: formData.publisher,
                year: formData.year,
                language: formData.language,
                pages: formData.pages,
                image: formData.image,
                url: '#',
                isbn13: nanoid(),
                selected: false
            };
            if (onAddBook) {
                onAddBook(newBook);
            }
        }

        // Close modal
        const modal = document.querySelector('dialog[open]');
        if (modal) {
            modal.close();
        }

        // Reset form
        setFormData({
            title: '',
            author: '',
            publisher: '',
            year: '',
            language: '',
            pages: '',
            image: ''
        });
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
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="author"> Author </label>
                    <input 
                        type="text" 
                        name="author" 
                        placeholder="Author..." 
                        value={formData.author}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="publisher"> Publisher </label>
                    <input 
                        type="text" 
                        name="publisher" 
                        placeholder="Publisher..." 
                        value={formData.publisher}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="year"> Publication Year </label>
                    <input 
                        type="number" 
                        name="year" 
                        placeholder="Publication Year..." 
                        value={formData.year}
                        onChange={handleChange}
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
                        value={formData.language}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="pages"> Pages </label>
                    <input 
                        type="number" 
                        name="pages" 
                        placeholder="Pages..." 
                        value={formData.pages}
                        onChange={handleChange}
                        min="1"
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="image"> Image URL </label>
                    <input 
                        type="url" 
                        name="image" 
                        placeholder="https://..." 
                        value={formData.image}
                        onChange={handleChange}
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