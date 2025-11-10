import { useState } from "react";
import { nanoid } from "nanoid";

function BookForm({book, add, onAddBook}) {
    const [formData, setFormData] = useState({
        title: book?.title || '',
        author: book?.author || '',
        publisher: book?.publisher || '',
        year: book?.year || '',
        language: book?.language || '',
        pages: book?.pages || '',
        image: book?.image || ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

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
            <h2> Add a new book </h2>
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

                <button className="btn primary" type="submit"> Submit </button>
            </form>
        </div>
    );
}

export default BookForm;