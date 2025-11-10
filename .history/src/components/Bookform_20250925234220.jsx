function BookForm() {
    return (
        <div className="form-container">
            <h2> Add new book </h2>
            <form>

                <div className="form-control"> 
                    <label htmlFor="book-title"> Title </label>
                    <input type="text" name="book-title" placeholder="Title..." />
                </div>

                <div className="form-control">
                    <label htmlFor="book-author"> Author </label>
                    <input type="text" name="book-author" placeholder="Author..." />
                </div>

                <div className="form-control">
                     <label htmlFor="book-publisher"> Publisher </label>
                    <input type="text" name="book-publisher" placeholder="Publisher..." />
                </div>

                <div className="form-control">
                     <label htmlFor="book-year"> Publication Year </label>
                    <input type="number" name="book-year" placeholder="Publication Year..." />
                </div>

                <div className="form-control">
                     <label htmlFor="book-language"> Language </label>
                    <input type="text" name="book-language" placeholder="Language..." />
                </div>


                <div className="form-control">
                     <label htmlFor="book-pages"> Pages </label>
                    <input type="number" name="book-pages" placeholder="Pages..." />
                </div>






                <button className="btn primary"> Save </button>

            </form>
        </div>
    );
}

export default ProductForm;