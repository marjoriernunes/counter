import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }

  decrement = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }))
  }

  render() {
    return (
      <div>
        <h2 className="counter">{this.state.count}</h2>
        <button className="increment" onClick={this.increment}>Increment</button>
        <button className="decrement" onClick={this.remove}>Decrement</button>
      </div>
    );
  }
}

export default App;
