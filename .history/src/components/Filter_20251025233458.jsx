function Filter({ filter, setFilter, categories }) {
    return (
        <div style={{ padding: "0 2rem" }}>
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