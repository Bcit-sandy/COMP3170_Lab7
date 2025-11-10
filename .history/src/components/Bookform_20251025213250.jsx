import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function BookForm({ onAddBook, onUpdateBook, editBook, isEditMode = false }) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publisher: '',
        year: '',
        language: '',
        pages: '',
        price: '',
        image: ''
    });

    // Pre-fill form when editing
    useEffect(() => {
        if (isEditMode && editBook) {
            setFormData({
                title: editBook.title || '',
                author: editBook.author || '',
                publisher: editBook.publisher || '',
                year: editBook.year || '',
                language: editBook.language || '',
                pages: editBook.pages || '',
                price: editBook.price || '',
                image: editBook.image || ''
            });
        }
    }, [isEditMode, editBook]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (isEditMode && editBook) {
            // Update existing book
            const updatedBook = {
                ...editBook,
                title: formData.title || '',
                author: formData.author || '',
                publisher: formData.publisher || '',
                year: formData.year || '',
                language: formData.language,
                pages: formData.pages,
                price: formData.price,
                image: formData.image || ''
            };

            if (onUpdateBook) {
                onUpdateBook(updatedBook);
            }
        } else {
            // Create a new book object
            const newBook = {
                title: formData.title || '',
                subtitle: formData.subtitle || '',
                author: formData.author || '',
                publisher: formData.publisher || '',
                year: formData.year || '',
                language: formData.language,
                pages: formData.pages,
                image: formData.image || '',
                url: '#',
                isbn13: nanoid(), 
                selected: false 
            };

            if (onAddBook) {
                onAddBook(newBook);
            }
        }

        // Reset form
        setFormData({
            title: '',
            author: '',
            publisher: '',
            year: '',
            language: '',
            pages: '',
            price: '',
            image: ''
        });

        const modal = document.querySelector('dialog[open]');
        if (modal) {
            modal.close();
        }
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
                        placeholder="Image URL..." 
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn primary" type="submit"> Submit </button>
            </form>
        </div>
    );
}

export default BookForm;