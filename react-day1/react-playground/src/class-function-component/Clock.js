import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: new Date().toLocaleTimeString("en-US", { timeZone: props.timeZone })
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString("en-US", { timeZone: this.props.timeZone }) });
    }, 1000);
  }
  
  componentWillUnmount() {
    console.log(`Clear timer`);
    clearInterval(this.timer);
  }

  render() {
    console.log(`Rendering clock ${this.props.timeZone}`);
    return (
      <div>
        <span>Current time in {this.props.timeZone} is: {this.state.now}</span>
      </div>
    );
  }
}

export default Clock;