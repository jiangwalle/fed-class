import React, { Component } from "react";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    console.log(`constructor() running..`);
  }

  componentDidMount() {
    console.log(`componentDidMount() running..`);
    // Call api
    // Access elements
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate() running..`);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount() running..`);
  }

  render() {
    console.log(`render() running..`);
    return (
      <div>
        <h1>Life Cycle Examples</h1>
        <span>{this.state.counter}</span>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
      </div>
    );
  }
}

export default LifeCycleExample;
