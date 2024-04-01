import React, { useState } from "react";

export default function List({ onAdd }) {
  const [taskName, setTaskName] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <div>
      <h1 className="text-center">Todo List</h1>
      <form className="todo_div" onSubmit={handleSubmit}>
        <input type="text"
          value={taskName}
          onChange={ev => setTaskName(ev.target.value)}
          placeholder="your next task..." required />
        <button>+</button>
      </form>
    </div>
  );
}