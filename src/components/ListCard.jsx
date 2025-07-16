import { Link } from 'react-router-dom';
import './ListCard.css';

function ListCard({ id, title }) {
  return (
    // Creamos un enlace que lleva a la ruta "/list/:id", donde `id` es el identificador de la lista
    // Este enlace envuelve todo el contenido del componente para que sea clicable
     <Link to={`/list/${id}`} className="list-card">
     <h3>{title}</h3>
     </Link>
  );
}

export default ListCard;
