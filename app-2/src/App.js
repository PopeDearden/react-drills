import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state= {
      cows: ['one cow','two cow', 'three cow','four cow', 'five cow']
    }
  }
  
  
  
  render() {
    let cowParty= this.state.cows.map((element, index)=>{
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">{cowParty}
      </div>
    );
  }
}

export default App;
