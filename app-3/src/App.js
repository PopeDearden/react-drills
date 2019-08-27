import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      theList: '',
      bestThings: ['Dr Pepper', 'More Dr Pepper', 'Even more Dr Pepper', 'Endless Dr Pepper']
    }
  }

  listChange(value) {
    this.setState({ theList: value })
  }

  render() {
    let thingsDisplay = this.state.bestThings.filter((element, index) => {
      return element.includes(this.state.theList)
    })
    let thingsDisplay2 = thingsDisplay.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        <input onChange={e => this.listChange(e.target.value)} type='text' />
        {thingsDisplay2}
      </div>
    );
  }
}

export default App;
