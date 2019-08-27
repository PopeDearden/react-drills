import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://media.istockphoto.com/photos/they-love-watching-all-the-animals-graze-picture-id1092610828"}/>
      </div>
    );
  }
}

export default App;
