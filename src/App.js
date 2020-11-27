import logo from './assets/img/logo.png';
import './App.css';

import React from "react"

class App extends React.Component {
  url = "https://www.google.co.in/"
  constructor(){
    super();
    this.state = {
      title: "Hello from Arijit Dey"
    };
  }

  onClick = ($event) => {
    window.open(this.url, "_blank");
  }
  render (){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src = {logo} onClick={this.onClick} alt = "logo"/>
      </div>
    );
  }
}

export default App;
