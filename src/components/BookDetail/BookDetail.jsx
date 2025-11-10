import './BookDetail.css';
import SimilarBook from '../SimilarBook/SimilarBook';

function BookDetail({data, onQuit}) {
    // Create search query based on publisher for similar books
    // Priority: publisher > author > title > default
    const searchQuery = (data.publisher || data.author || data.title || 'programming').trim();
    
    return (
        <div className="book-detail-container">
            <div className="book-detail-header">
                <h2 className="book-detail-page-title">Book Details</h2>
                <button 
                    onClick={onQuit}
                    className="book-detail-back-button"
                >
                    Return to Book Listing
                </button>
            </div>
            <div className="book-detail-content">
                <div className="book-detail-image">
                    {data.image ? (
                        <img 
                            src={data.image} 
                            alt={data.title} 
                            className="book-detail-cover"
                        />
                    ) : (
                        <div className="book-detail-cover book-detail-placeholder">No Image</div>
                    )}
                </div>
                <div className="book-detail-info">
                    <h1 className="book-detail-title">{data.title}</h1>
                    <div className="book-detail-list">
                        <div className="book-detail-item">
                            <span className="detail-label">Author:</span>
                            <span className="detail-value">{data.author || 'N/A'}</span>
                        </div>
                        <div className="book-detail-item">
                            <span className="detail-label">Publisher:</span>
                            <span className="detail-value">{data.publisher || 'N/A'}</span>
                        </div>
                        <div className="book-detail-item">
                            <span className="detail-label">Publication Year:</span>
                            <span className="detail-value">{data.year || 'N/A'}</span>
                        </div>
                        <div className="book-detail-item">
                            <span className="detail-label">Page Count:</span>
                            <span className="detail-value">{data.pages || 'N/A'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <SimilarBook query={searchQuery} />
        </div>
    );
}

export default BookDetail;