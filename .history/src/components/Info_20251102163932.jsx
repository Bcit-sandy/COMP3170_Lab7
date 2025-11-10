function Info ({ data }) {
    return (
        <div className="info-container"> 
            <a className="info-link" href={data.url} target="_blank"> Learn More </a> 
        </div>
    );
    }
export default Info;

