import React, { useState } from "react";
import "./App.css";
import Register from "./Components/Register/js/Register";
import List from "./Components/TodoIndex/js/Todoindex";
import Task from "./Components/TodoList/js/Task";
import Container from "./Components/Container";


function App() {

    const [isRegistered, setIsRegistered] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tasks, setTasks] = useState([]);

    const registrationHandler = (event) => {
        setEmail(email);
        setPassword(password);
        setIsRegistered(true);
        event.preventDefault();
    };


    const addTask = (name) => {
        setTasks(prevTasks => [...prevTasks, { name: name, done: false }]);
    };

    function removeTask(indexToRemove) {
        setTasks(prev => {
            return prev.filter((taskObject, index) => index !== indexToRemove);
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
            <Container className="pt-3 pb-3">
                {isRegistered ? (
                    <>
                        <List onAdd={addTask}></List>
                        {tasks.map((task, index) => (
                            <Task key={task.name} {...task}
                                onTrash={() => removeTask(index)}
                                onToggle={done => updateTaskDone(index, done)}
                            />
                        ))}
                    </>
                ) : (
                    <Register submit={registrationHandler}></Register>
                )}
            </Container>
        </div>
    );
};

export default App;