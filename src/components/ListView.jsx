import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ListView.css';
import TaskItem from './TaskItem';

function ListView({ lists, addTaskToList }) {  // añade addTaskToList como prop
  const { id } = useParams();
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

  if (!list) return <p>List not found</p>;

  return (
    <div className="list-container">
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
