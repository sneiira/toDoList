import { useState } from "react";
import "./TaskItem.css";
import { MdOutlineCheckBox } from "react-icons/md";

function TaskItem({ text }) {
  const [completed, setCompleted] = useState(false);

  const toggleCheckbox = () => {
    setCompleted(!completed);
  };

  return (

    <div className="task-item">
      <label className="custom-checkbox">  
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleCheckbox}
      />
      <span className={completed ? "task-text completed" : "task-text"}>
        {text}
      </span>
      <MdOutlineCheckBox className={`icon ${completed ? "checked" : ""}`} />
      </label>
    </div>
  );
}

export default TaskItem;