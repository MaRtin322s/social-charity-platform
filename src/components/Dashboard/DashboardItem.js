import { Link } from "react-router-dom";
import "./styles/dashboard.css";

const DashboardItem = ({ publicationData }) => {
    return (
        <article className="publication">
            <h1>{publicationData.title}</h1>
            <span className="content-cat ">{publicationData.category}</span>
            <p className="content">{publicationData.content}</p>
            <div className="activities">
                <Link className="btn like-btn" to={`/details/${publicationData._id}`}>Details</Link>
            </div>
        </article>
    );
}

export default DashboardItem;