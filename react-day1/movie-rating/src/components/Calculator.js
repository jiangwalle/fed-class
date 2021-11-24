import React from 'react';
import { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sum: 0
    };

    this.num1Ref = React.createRef();
    this.num2Ref = React.createRef();
  }

  calculate = () => {
    const num1 = parseInt(this.num1Ref.current.value);
    const num2 = parseInt(this.num2Ref.current.value);
    this.setState({ sum: num1 + num2 });
  }

  clear = () => {
    this.num1Ref.current.value = '';
    this.num2Ref.current.value = '';
    this.setState({ sum: 0 });
  }

  render() {
    return (
      <div>
        <h3>Calculator</h3>
        <input ref={this.num1Ref} placeholder="请输入第1个数"></input>
        <span>+</span>
        <input ref={this.num2Ref} placeholder="请输入第2个数"></input>
        <button onClick={this.calculate}>计算</button>
        <button onClick={this.clear}>重置</button>
        <hr/>
        {this.state.sum}
      </div>
    )
  }
}

export default Calculator;