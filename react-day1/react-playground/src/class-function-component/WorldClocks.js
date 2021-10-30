import React, { Component } from "react";
import Clock from "./Clock";

class WorldClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clockVisible: true,
    };
  }

  render() {
    return (
      <div>
        <p>Clock is {this.state.clockVisible ? "display" : "hided"}</p>
        <button
          onClick={() => {
            this.setState({ clockVisible: !this.state.clockVisible });
          }}
        >
          {this.state.clockVisible ? "Hide Clock" : "Show Clock"}
        </button>

        {/* {this.state.clockVisible ? (
          <div>
            <Clock timeZone="Pacific/Auckland" />
            <Clock timeZone="Asia/Shanghai" />
          </div>
        ) : ''} */}

        {this.state.clockVisible && (
          <div>
            <Clock timeZone="Pacific/Auckland" />
            <Clock timeZone="Asia/Shanghai" />
          </div>
        )}
      </div>
    );
  }
}

export default WorldClock;
