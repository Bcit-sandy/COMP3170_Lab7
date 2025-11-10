import './ViewToggle.css';

function ViewToggle({ currentView, onViewChange }) {
  // Only show the button when on book listing view
  if (currentView !== 'books') {
    return null;
  }

  return (
    <div className="view-toggle-container">
      <button 
        className="view-toggle-button"
        onClick={() => onViewChange('loans')}
      >
        Loan Management
      </button>
    </div>
  );
}

export default ViewToggle;

