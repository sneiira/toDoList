import { useState } from 'react';
import './DeletePopUp.css';

function DeletePopUp({ title, onClose, onDelete }) {
  const handleDelete = () => {
      onDelete();  // Llama a la función onDelete para eliminar la lista o tarea
      onClose();  // Cierra el popup tras añadir
    }
  

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close"
          title="Close"
        >
          ×
        </button>
        <h3>{title}</h3>
        <div className="popup-actions"> {/* Contenedor para los botones de acción */}
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );

};
export default DeletePopUp;
