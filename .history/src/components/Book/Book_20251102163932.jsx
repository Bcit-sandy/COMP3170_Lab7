import Info from "../Info";
import './Book.css';

function Book({data, onSelect, isSelected, isOnLoan = false}) {
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
        {isOnLoan && (
          <div className="on-loan-label">On Loan</div>
        )}
      </div>

      <p className="book-author">Author: {data.author}</p>
      <Info data={data} />
    </div>
  );
}
export default Book;

