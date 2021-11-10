import React, { Component } from 'react';
import CurrencyInput from './CurrencyInput';

class Exchange extends Component {
  constructor(props) {
    super(props);

    this.state = { // 4
      value: 0,
      currency: '',
    };
  }

 onAmountChange = (amount, currency) => { // 3
    console.log(`Exchange knows `, amount, currency);
    this.setState({ value: amount, currency: currency });
  }

render() { // 5
    let nzdAmount = '';
    let rmbAmout = '';

    if (this.state.currency === 'NZD') {
      nzdAmount = this.state.value;
      rmbAmout = this.state.value * 4.56; // 6
    } else {
      rmbAmout = this.state.value;
      nzdAmount = this.state.value / 4.56;
    }

    return (
      <div className="center">
        <h2>Currency Exachange</h2>
        <CurrencyInput value={nzdAmount} currency="NZD" onAmountChange={this.onAmountChange} /> {/* 7 */}
        <CurrencyInput value={rmbAmout} currency="RMB" onAmountChange={this.onAmountChange} />
      </div>
    )
  }
}

export default Exchange;