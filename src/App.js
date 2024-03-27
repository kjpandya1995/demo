import React, { useEffect, useState } from "react";
import "./App.css";
import Register from "./Components/Register";
import List from "./Components/List";
import Task from "./Components/Task";

// function App (){
//   constructor(props) {
//     super(props)

//     this.state = {
//       isRegistered: false,
//       //  name:null,
//       email: null,
//       password: null,
//     };
//   }

//   registrationHandler = (event) => {
//     // const name = event.target.name.value;
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     this.setState({ email, password, isRegistered: true });
//     event.preventDefault();

//   }

//   render() {

//     const [tasks, setTasks] = useState(0);
//     useEffect(() => {
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//     }, [tasks]);
//     function addTask(name) {
//       setTasks(prev => [...prev, { name: name, done: false }]);
//     }

//     return (
//       <div className="main">
//         <div className="container register-contaneir card pt-3 pb-3">
//           {this.state.isRegistered ? (
//             <>
//               <List onAdd={addTask}></List>
//               {tasks.map(task => (
//                 <Task {...task} />
//               ))}
//             </>
//           ) : (
//             <Register submit={this.registrationHandler}></Register>
//           )}

//         </div>
//       </div>

//     );
//   }
// }


function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [, setEmail] = useState(null);
  const [, setPassword] = useState(null);
  const [tasks, setTasks] = useState([]);

  const registrationHandler = (event) => {
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    setIsRegistered(true);
    event.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
  setTasks(tasks);
  },[]);

  const addTask = (name) => {
    setTasks(prevTasks => [...prevTasks, { name: name, done: false }]);
  };

  function removeTask(indexToRemove){
    setTasks(prev => {
      return prev.filter ((taskObject,index) => index !== indexToRemove);
      });

  }

  function updateTaskDone(taskIndex, newdone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newdone;
      return newTasks;
    });
  }

  return (
    <div className="main">
      <div className="container register-container card pt-3 pb-3">
      
        {isRegistered ? (
          <>
            <List onAdd={addTask}></List>
            {tasks.map((task,index ) => (
              <Task key={task.name} {...task} 
              onTrash={() => removeTask(index)}
              onToggle={done => updateTaskDone(index, done) } />
            ))}
          </>
        ) : (
          <Register submit={registrationHandler}></Register>
        )}
      </div>
    </div>
  );
};

export default App;