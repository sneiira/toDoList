import { useState } from 'react';
import './AddPopUp.css';


// Componente funcional que recibe 4 props:
// - title: título que se muestra arriba del popup
// - placeholder: texto sugerido dentro del input
// - onAdd: función que se ejecuta al añadir (cuando se hace clic en "Add")
// - onClose: función que se ejecuta al cerrar el popup (botón "Cancel" o después de añadir)
function AddPopUp({ title, placeholder, onAdd, onClose }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
      onClose();  // Cierra el popup tras añadir
    }
  };

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
        <input
          className='popup-input'
          type="text"
          value={input}
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="popup-actions"> {/* Contenedor para los botones de acción */}
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPopUp;
