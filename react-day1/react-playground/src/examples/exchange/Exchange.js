import React, { Component } from "react";
import CurrencyInput from "./CurrencyInput";

function convert(fromValue, fromCurrency, toCurrency) {
  const map = {
    rmb_rmb: 1,
    rmb_nzd: 0.22,
    nzd_rmb: 4.57,
    nzd_nzd: 1,
  };
  return fromValue * map[`${fromCurrency}_${toCurrency}`];
}

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      currency: 'rmb',
    };
  }

  handleValueChange = (value, currency) => {
    this.setState({
      value: value,
      currency: currency,
    });
  };

  render() {
    return (
      <div>
        <h2>Exchange</h2>
        <CurrencyInput
          value={convert(this.state.value, this.state.currency, "rmb")}
          currency="rmb"
          handleValueChange={this.handleValueChange}
        />
        <CurrencyInput
          value={convert(this.state.value, this.state.currency, "nzd")}
          currency="nzd"
          handleValueChange={this.handleValueChange}
        />
      </div>
    );
  }
}

export default Exchange;
