import { useState } from "react";
import { nanoid } from "nanoid";

function BookForm({book, add}) {
    function handleSubmit(e) {
        e.preventDefault();

        const data=new FormData(e.target);

        add({
        title: data.get('title'),
        author: data.get('author'),
        publisher: data.get('publisher'),
        year: data.get('year'),
        language: data.get('language'),
        pages: data.get('pages'),
        image: data.get('image'),
        id: book?.id || nanoid(),
    });
    e.target.reset();

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
                        defaultValue={data.get('title')}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="author"> Author </label>
                    <input 
                        type="text" 
                        name="author" 
                        placeholder="Author..." 
                        defaultValue={data.get('author')}
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="publisher"> Publisher </label>
                    <input 
                        type="text" 
                        name="publisher" 
                        placeholder="Publisher..." 
                        defaultValue={data.get('publisher')}
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="year"> Publication Year </label>
                    <input 
                        type="number" 
                        name="year" 
                        placeholder="Publication Year..." 
                        defaultValue={data.get('year')}
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
                        defaultValue={data.get('language')}
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="pages"> Pages </label>
                    <input 
                        type="number" 
                        name="pages" 
                        placeholder="Pages..." 
                        vdefaultValue={data.get('pages')}
                        min="1"
                    />
                </div>

                <div className="form-control">
                     <label htmlFor="image"> Image URL </label>
                    <input 
                        type="url" 
                        name="image" 
                        placeholder="https://..." 
                        defaultValue={data.get('image')}
                    />
                </div>

                <button className="btn primary" type="submit" onClick={closeModal}> 
                    {book ? 'Update' : 'Submit'} 
                </button>
            </form>
        </div>
    );
}

export default BookForm;