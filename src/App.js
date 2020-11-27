import logo from './assets/img/logo.png';
import './App.css';

import React from "react"

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      title: "Hello from Arijit Dey"
    };
  }
  render (){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src = {logo} alt = "logo"/>
      </div>
    );
  }
}

export default App;
