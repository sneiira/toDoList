import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { VscDiffAdded } from "react-icons/vsc";
import { useState } from 'react'
import './App.css'
import ListCard from './components/ListCard'
import ListView from './components/ListView';

function App() {
  // Estado para almacenar las listas, su titulo,id y tareas
  const [lists, setLists] = useState([]); 

  // Función que se ejecuta al hacer clic en el botón de "añadir lista"
  const handleAddList = () => {
    // Solicita al usuario el título de la nueva lista
    const newListTitle = prompt("Enter the title for the new list:");
    // Si el usuario proporciona un título no vacío o formado por espacios, crea una nueva lista y la agrega al estado
    if(newListTitle.trim()) {
      const newList = {
        id: Date.now(), // Genera un ID único basado en la fecha actual
        title: newListTitle, // Título de la nueva lista
        tasks: [] // Inicializa la lista de tareas como un array vacío
      };
      // Actualiza el estado de las listas añadiendo la nueva lista al final del array con el operador spread (...)
      setLists([...lists, newList]);
    }
  };

  // Función para agregar una tarea a una lista específica
  // Recibe el ID de la lista y la tarea a agregar
  const addTaskToList = (listId, task) => {
    // setLists es la función que actualiza el estado de las listas
    // Recibe el estado anterior de las listas y mapea sobre cada lista
    // Esto es importante para garantizar que usamos el estado más reciente
    // Si la lista actual tiene el mismo ID que el proporcionado, agrega la tarea a su array de tareas
    //Importante: No se debe modificar el estado directamente, siempre se debe crear una nueva copia
    // Es decir si cambiamos el estado de una lista, debemos crear una nueva lista con las tareas actualizadas y referenciarla
    // Si la lista no coincide, simplemente la devuelve sin cambios
    setLists(prevLists => prevLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          tasks: [...list.tasks, task]
        };
      }
      return list;
    }));
  };

  return (
    // Router permite la navegación entre diferentes rutas de la aplicación
    // Routes define las diferentes rutas que la aplicación puede manejar
    // Route define una ruta específica y el componente que se renderiza cuando se accede a esa ruta
    // Link se utiliza para crear enlaces a diferentes rutas dentro de la aplicación
    // En este caso, se utiliza para navegar a la vista de una lista específica
    <Router>
      <div className="app-container">
        <h1 className='title'>My To Do Lists</h1> {/*Título de la aplicación que aparece en todas las paginas*/}
        <Routes>
          {/* Ruta principal que muestra todas las listas*/}
          <Route path="/" element={
          <>
            {/* Si no hay listas, muestra un mensaje indicando que no hay listas disponibles */}
            {/* Si hay listas, muestra un contenedor con todas las listas */}
            {lists.length === 0 ? (
              <p>No lists available. Please add a new list.</p>
            ) : (
              <div className="lists-container">
                {lists.map((list) => (
                  <ListCard key={list.id} id={list.id} title={list.title} />
                ))}
              </div>
            )}
            <div className="button-container">
              <button className='AddButton' onClick={handleAddList}>
                <VscDiffAdded />
              </button>
            </div>
          </>
        } />
          {/* Ruta para ver una lista específica, recibe el ID de la lista como parámetro */}
          {/* Este componente ListView recibe el array de listas y la función para agregar tareas a una lista específica */}
          <Route path="/list/:id" element={<ListView lists={lists} addTaskToList={addTaskToList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
