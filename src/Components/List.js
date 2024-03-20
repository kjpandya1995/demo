import React, { useState } from "react";

export default function List() {
  const [taskName,setTaskName] = useState('');
  return (
    <div className="login-section">
      <div className="container card ">
        <form>
          <button>+</button>
          <input type="text" 
          value={taskName}
          onChange={ev => setTaskName(ev.target.value)}
          placeholder="your next task..."></input>
        </form>
      </div>
    </div>
  )
}
