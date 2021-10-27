import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: new Date().toLocaleTimeString("en-US", { timeZone: this.props.timeZone })
    };

    setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString("en-US", { timeZone: this.props.timeZone }) });
    }, 1000);
  }

  render() {
    console.log(`==== Hay, i re rendered!!`);
    return (
      <div>
        <span>Current time in {this.props.timeZone} is: {this.state.now}</span>
      </div>
    );
  }
}

export default Clock;