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
      
    </div>
  );
}
export default Book;