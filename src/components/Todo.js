import React, { useState } from "react";
function Todo(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if(task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>To-Do List</h2>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
          />
          <button onClick={addTask}>Add</button>
    
          <ul>
            {tasks.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
        </div>
      );
}
export default Todo;