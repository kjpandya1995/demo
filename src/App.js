import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Register from "./Components/Register";
import List from "./Components/List";
import Task from "./Components/Task";

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isRegistered: false,
      //  name:null,
      email: null,
      password: null,
    };
  }

  registrationHandler = (event) => {
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ email, password, isRegistered: true });
    event.preventDefault();

  }

  render() {

    const [tasks, setTasks] = useState(0);
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    function addTask(name) {
      setTasks(prev => [...prev, { name: name, done: false }]);
    }

    return (
      <div className="main">
        <div className="container register-contaneir card pt-3 pb-3">
          {this.state.isRegistered ? (
            <>
              <List onAdd={addTask}></List>
              {tasks.map(task => (
                <Task {...task} />
              ))}
            </>
          ) : (
            <Register submit={this.registrationHandler}></Register>
          )}

        </div>
      </div>

    );
  }
}

export default App;