import "./Filter.css";
import { useState } from "react";
function Filter({ categories = [] }) {
    const [filter, setFilter] = useState('');
    return (
        <div className="filter-container">
           FILTER BY AUTHOR:
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}>
                <option value=''>All</option>
                {[...authors].map((author) => (
                    <option value={author}>{author}</option>
                ))}
            </select>
        </div>
    );
}

export default Filter;