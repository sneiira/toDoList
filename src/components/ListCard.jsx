import { Link } from 'react-router-dom';
import './ListCard.css';

function ListCard({ id, title }) {
  return (
     <Link to={`/list/${id}`} className="list-card">
     <h3>{title}</h3>
     </Link>
  );
}

export default ListCard;
