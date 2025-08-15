import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ListCard.css';
import './DeletePopUp';


function ListCard({ id, title, deleteList }) {
  const[showDeletePopUp, setShowDeletePopUp] = useState(false);

  const handleDelete = () => {
    setShowDeletePopUp(true); // Muestra el popup de confirmación de eliminación
  }
  return (
    <div className='list-card-container'>
    {/*Creamos un enlace que lleva a la ruta "/list/:id", donde `id` es el identificador de la lista
     Este enlace envuelve todo el contenido del componente para que sea clicable*/}
     <Link to={`/list/${id}`} className="list-card">
     <h3>{title}</h3>
     </Link>
     <button className="delete-button" onClick={handleDelete}>x</button>
      {showDeletePopUp && (
        <DeletePopUp
          title={`Are you sure you want to delete the list "${title}"?`}
          onClose={() => setShowDeletePopUp(false)}
          onDelete={() => {
            deleteList(id); // Llama a la función para eliminar la lista
            setShowDeletePopUp(false); // Cierra el popup tras eliminar
          }}
        />
      )}
     </div>
  );
}

export default ListCard;
