import { useState } from 'react';
// Importamos useParams para obtener parámetros de la URL y useNavigate para navegar entre rutas
import { useParams, useNavigate } from 'react-router-dom';
import './ListView.css';
import TaskItem from './TaskItem';
import { IoIosArrowBack } from "react-icons/io";
import AddPopUp from './AddPopUp';

function ListView({ lists, addTaskToList }) { 
  // Obtenemos el ID de la lista desde los parámetros de la URL
  const { id } = useParams();
  // Obtenemos una función para navegar (ej. volver atrás con navigate(-1))
  const navigate = useNavigate();

  // Buscar la lista según el id de la url
  const list = lists.find((l) => l.id.toString() === id);

  // Estado para controlar el input de la nueva tarea
  const [newTask, setNewTask] = useState('');

  // Estado para controlar la visibilidad del popup
  const [showAddTaskPopUp, setShowAddTaskPopUp] = useState(false);

  const handleAddTask = () => {
    setShowAddTaskPopUp(true);
  }

  // Añadir tarea a la lista
  const addTask = (taskTitle) => {
    if (taskTitle.trim()) {
      addTaskToList(list.id, taskTitle);  // llamar a la función que actualiza en App.js
      setNewTask('');                   // limpiar input
    }
  }
 // Si no se encuentra la lista, mostramos un mensaje
 // Esto es importante para evitar errores si el usuario intenta acceder por ejemplo a una URL invalida
  // También es una buena práctica para mejorar la experiencia del usuario
  if (!list) return <p>List not found</p>;

  return (
    <div className="list-container">
      {/* Botón para volver atrás */}
      {/* Este botón utiliza la función navigate para volver a la página anterior */}
      <button className = "backButton" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
      <h3 className='ListHeader'>{list.title}</h3>
      <div className="tasks-wrapper">
        {list.tasks.length === 0 ? (
          <p className="no-tasks-message">No tasks yet.</p>
       ) : (
         list.tasks.map((task, index) => (
          <TaskItem key={index} text={task} />
        ))
        )}
      </div>

      <button className='add-button' onClick={handleAddTask}>Add Task</button>

       {/*si showAddTaskPopUp esta activo muestra el pop up con estos valores para rellenarlo*/}
       {showAddTaskPopUp && (
              <AddPopUp
                title="Add new task"
                placeholder="Task name"
                onAdd={addTask}
                onClose={() => setShowAddTaskPopUp(false)}
              />
            )}
    </div>
     
  );
}

export default ListView;
