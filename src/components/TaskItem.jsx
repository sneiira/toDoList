import { useState } from "react";
import "./TaskItem.css";
import { MdOutlineCheckBox } from "react-icons/md";

function TaskItem({ text }) {
  const [completed, setCompleted] = useState(false);

  // Función que cambia el estado completed de true a false y viceversa
  const toggleCheckbox = () => {
    setCompleted(!completed);
  };

  return (

    <div className="task-item">
      <span className={completed ? "task-text completed" : "task-text"}>
        {text}
      </span>
      <label className="custom-checkbox">  
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleCheckbox}
      />
      <MdOutlineCheckBox className={`icon ${completed ? "checked" : ""}`} />
      </label>
    </div>
  );
}

export default TaskItem;