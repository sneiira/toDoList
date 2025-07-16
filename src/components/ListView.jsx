import { useState } from 'react';
// Importamos useParams para obtener parámetros de la URL y useNavigate para navegar entre rutas
import { useParams, useNavigate } from 'react-router-dom';
import './ListView.css';
import TaskItem from './TaskItem';

function ListView({ lists, addTaskToList }) { 
  // Obtenemos el ID de la lista desde los parámetros de la URL
  const { id } = useParams();
  // Obtenemos una función para navegar (ej. volver atrás con navigate(-1))
  const navigate = useNavigate();

  // Buscar la lista según el id de la url
  const list = lists.find((l) => l.id.toString() === id);

  // Estado para controlar el input de la nueva tarea
  const [newTask, setNewTask] = useState('');

  // Añadir tarea a la lista
  const handleAddTask = () => {
    if (newTask.trim()) {
      addTaskToList(list.id, newTask);  // llamar a la función que actualiza en App.js
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
      <button onClick={() => navigate(-1)}>← Back</button>
      <h3>{list.title}</h3>
      <div className="tasks-wrapper">
        {list.tasks.map((task, index) => (     // aquí usas list.tasks 
            <TaskItem key={index} text={task} />
        ))}
      </div>

      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default ListView;
