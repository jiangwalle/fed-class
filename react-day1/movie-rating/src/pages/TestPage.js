import React, { Component, createRef } from 'react';
import Calculator from '../components/Calculator';

class TestPage extends Component {
  constructor(props) {
    super(props);

    this.ref1 = createRef();
    this.ref2 = createRef();
    this.ref3 = createRef();
  }

  resetAll = () => {
    this.ref1.current.clear();
    this.ref2.current.clear();
    this.ref3.current.clear();
  }

  calcAll = () => {
    this.ref1.current.calculate();
    this.ref2.current.calculate();
    this.ref3.current.calculate();
  }

  render() {
    return (
      <div>
        <h2>Test Page</h2>
        
        <button onClick={this.resetAll}>重置所有</button>
        <button onClick={this.calcAll}>计算所有</button>

        <Calculator ref={this.ref1} />
        <Calculator ref={this.ref2} />
        <Calculator ref={this.ref3} />
      </div>
    )
  }
}

export default TestPage;