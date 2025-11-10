import "./Filter.css";

function Filter({ authors = [], onFilterChange, currentFilter = '' }) {
    return (
        <div className="filter-container">
           FILTER BY AUTHOR:
            <select
                value={currentFilter}
                onChange={(e) => onFilterChange(e.target.value)}>
                <option value=''>All</option>
                {authors.map((author, index) => (
                    <option key={index} value={author}>{author}</option>
                ))}
            </select>
        </div>
    );
}

export default Filter;