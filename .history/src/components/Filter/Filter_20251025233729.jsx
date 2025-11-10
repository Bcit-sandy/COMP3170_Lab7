import "./Filter.css";
function Filter({ filter, setFilter, categories }) {
    return (
        <div className="filter-container">
            Categories:
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}>
                <option value=''>All</option>
                {[...categories].map((category) => (
                    <option value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
}

export default Filter;