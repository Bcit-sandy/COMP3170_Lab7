import Info from "./Info";

function Book({data, onToggleSelection}) {
  const handleBookClick = () => {
    if (onToggleSelection) {
      onToggleSelection(data);
    }
  };

  return (
    <div 
      className={`book-container ${data.selected ? 'book-selected' : ''}`}
      onClick={handleBookClick}
    >
      <div className="book-cover">
        <img className="book-cover-image" src={data.image} alt={data.title} />
      </div>

      <p className="book-price">{data.price}</p>
      <Info data={data} />
    </div>
  );
}
export default Book;