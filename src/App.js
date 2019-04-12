import React, { Component, useState } from 'react';

class App extends Component {
  state = {
    count: 0,
    title: 'Hello',
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '50px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button className="increment" onClick={this.handleIncrement}>
            Increment Count
          </button>
          <button className="decrement" onClick={this.handleDecrement}>
            Decrement Count
          </button>
        </div>

        <h6>THE COUNT:{this.state.count}</h6>

        <input className="title" onChange={this.handleChange} />

        <h2>Title is: {this.state.title}</h2>
      </div>
    );
  }
}

function App2() {
  const [count, setCount] = useState(0);

  const [titleText, setTitleText] = useState('Hello');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '50px',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button className="increment" onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
        <button className="decrement" onClick={() => setCount(count - 1)}>
          Decrement Count
        </button>
      </div>

      <h6>THE COUNT:{count}</h6>

      <input
        className="title"
        onChange={event => setTitleText(event.target.value)}
      />

      <h2>Title is: {titleText}</h2>
    </div>
  );
}

export default App2;
