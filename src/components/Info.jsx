function Info ({ data, onShowDetails }) {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onShowDetails) {
            onShowDetails(data);
        }
    };

    return (
        <div className="info-container"> 
            <button 
                className="info-link" 
                onClick={handleClick}
            >
                Details
            </button>
        </div>
    );
}

export default Info;

