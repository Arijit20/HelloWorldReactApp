import logo from './assets/img/logo.png';
import './App.css';

import React from "react"

class App extends React.Component {
  url = "https://www.google.co.in/"
  constructor(){
    super();
    this.state = {
      title: ""
    };
  }

  onClick = ($event) => {
    window.open(this.url, "_blank");
  }

  onNameChannge = (event) => {
    this.setState({title: event.target.value})
  }

  render (){
    return (
      <div>
      <div>
        <h1>hello {this.state.title}</h1>
        <img src = {logo} onClick={this.onClick} alt = "logo"/>
      </div>
      <div className = "text-box">
      <input onChange = {this.onNameChannge}/>
    </div>
    </div>
    );
  }
}

export default App;
