import React, { useState } from "react";
import InputField from "../../InputField";
import Button from "../../Button";

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
      <form className="todo_list" onSubmit={handleSubmit}>
        <InputField
          type="text"
          value={taskName}
          onChange={ev => setTaskName(ev.target.value)}
          placeholder="your next task..." required />
        <Button>+</Button>
      </form>
    </div>
  );
}