import { useState } from "react";
import Info from "./Info";

function Book({data, onRemove}) {
  const [isSelected, setIsSelected] = useState(false);

  const handleBookClick = () => {
    setIsSelected(!isSelected);
  };

  const handleRemove = (e) => {
    e.stopPropagation(); 
    if (onRemove) {
      onRemove(data.id || data.title);
    }
  };

  return (
    <div 
      className={`book-container ${isSelected ? 'book-selected' : ''}`}
      onClick={handleBookClick}
    >
      <div className="book-cover">
        <img className="book-cover-image" src={data.image} alt={data.title} />
      </div>

      <p className="book-price">{data.price}</p>
      <Info data={data} />
      
      <button 
        className="remove-button"
        onClick={handleRemove}
        title="Remove book"
      >
       X
      </button>
    </div>
  );
}
export default Book;