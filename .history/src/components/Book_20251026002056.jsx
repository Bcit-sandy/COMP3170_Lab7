import Info from "./Info";

function Book({data, onSelect, isSelected}) {
  const handleBookClick = () => {
    if (onSelect) {
      onSelect(data);
    }
  };

  return (
    <div 
      className={`book-container ${isSelected ? 'book-selected' : ''}`}
      onClick={handleBookClick}
    >
      <div className="book-cover">
        <img className="book-cover-image" src={data.image} alt={data.title} />
        <p className="book-title">{data.title}</p>
        <p className="book-author">{data.author}</p>
      </div>

      <p className="book-price">{data.price}</p>
      <Info data={data} />
    </div>
  );
}
export default Book;

         
                
          