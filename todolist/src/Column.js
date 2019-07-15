import React from "react";

const Column = ({ status, tasks,addTaskToApp }) => {
  const filteredTasks = tasks.filter(task => status === task.status);

  return (
    <div className="column">
      <h2>{status}</h2>
      {status === "To Do" && (
        <form onSubmit={addTaskToApp}>
          <input type="text" />
          <button>Criar Task</button>
        </form>
      )}
      <ul>
        {filteredTasks.map(task => (
          <li>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};
export default Column;
