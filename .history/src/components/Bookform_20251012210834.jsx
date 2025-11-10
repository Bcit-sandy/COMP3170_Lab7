import { useState } from "react";

function BookForm({ onAddBook }) {
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

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        // Create a new book object
        const newBook = {
            title: formData.title || '',
            subtitle: formData.subtitle || '',
            author: formData.author,
            publisher: formData.publisher,
            year: formData.year,
            language: formData.language,
            pages: formData.pages,
            image: formData.image || '',
            url: '#',
            isbn13: Date.now().toString(), // Generate a simple ID
            selected: false // Initialize as not selected
        };

        // Call the parent function to add the book
        if (onAddBook) {
            onAddBook(newBook);
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

        // Close the modal (you might want to add this functionality)
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
                        required
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
                        required
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