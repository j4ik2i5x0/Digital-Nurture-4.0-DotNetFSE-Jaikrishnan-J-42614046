import React from 'react';
import './App.css';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Bind 'this' for the counter and synthetic event handlers
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  // ---- Counter Methods ----
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello() {
    alert('Hello! Incrementing the value.');
  }

  // This method calls multiple other methods as required
  handleIncrement() {
    this.incrementCount(); // [cite: 175]
    this.sayHello();       // [cite: 176]
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  // ---- Argument Passing Method ----
  saySomething(message) {
    alert(message);
  }

  // ---- Synthetic Event Method ----
  // The 'event' object passed here is a React SyntheticEvent
  handlePress(event) {
    console.log('Synthetic Event Details:', event); // You can inspect the event in the console
    alert('I was clicked'); // [cite: 178]
  }

  render() {
    return (
      <div className="App">
        <h1>React Event Handling Examples</h1>

        {/* Counter Example */}
        <div className="card">
          <h2>Counter</h2>
          <p>Current Count: {this.state.count}</p>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>

        {/* Argument Passing & Synthetic Event Examples */}
        <div className="card">
          <h2>Other Events</h2>
          <button onClick={() => this.saySomething('Welcome')}>Say Welcome</button> {/* [cite: 177] */}
          <button onClick={this.handlePress}>OnPress (Synthetic Event)</button>
        </div>

        {/* Currency Converter Component */}
        <CurrencyConvertor /> {/*  */}
      </div>
    );
  }
}

export default App;