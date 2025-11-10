import "./Filter.css";
import { useState } from "react";
function Filter({ categories = [] }) {
    const [filter, setFilter] = useState('');
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