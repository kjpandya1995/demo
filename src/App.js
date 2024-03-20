import React , { Component } from 'react';
import './App.css';
import Register from "./Components/Register";
import List from "./Components/List";

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isRegistered: false,
      //  name:null,
       email:null,
       password:null,
    };
  }
  
  registrationHandler = (event) => {
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({email,password, isRegistered: true});
    event.preventDefault();

  };



  render() {
    return (
      <div>
        { this.state.isRegistered ? <List></List> : <Register submit={this.registrationHandler}></Register>}
      </div>
    );
  }
}

export default App;