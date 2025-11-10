import { useState } from "react";
import { nanoid } from "nanoid";

function BookForm({book, add}) {

    function handleSubmit(e) {
        e.preventDefault();

        const data=new FormData(e.target);

        add({
            id: book ? book.id : Date.now(),
            title: data.get('title'),
            author: data.get('author'),
            publisher: data.get('publisher'),
            year: data.get('year'),
            language: data.get('language'),
            pages: data.get('pages'),
            image: data.get('image'),
        });

        e.target.reset();
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

                <button className="btn primary" type="submit" onClick={onClose}> Submit </button>
            </form>
        </div>
    );
}

export default BookForm;