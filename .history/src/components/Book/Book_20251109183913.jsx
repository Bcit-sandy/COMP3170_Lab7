import Info from "../Info";
import './Book.css';

function Book({data, onSelect, isSelected, isOnLoan = false, onShowDetails}) {
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
        {data.image ? (
          <img className="book-cover-image" src={data.image} alt={data.title} />
        ) : (
          <div className="book-cover-image book-cover-placeholder">No Image</div>
        )}
        {isOnLoan && (
          <div className="on-loan-label">On Loan</div>
        )}
      </div>

      <p className="book-author">Author: {data.author}</p>
      <Info data={data} onShowDetails={onShowDetails} />
    </div>
  );
}
export default Book;

