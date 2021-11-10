import React, { Component } from 'react';

class CurrencyInput extends Component {
  render() {
    return (
      <div>
        <span>{this.props.currency}</span>
        {/*     9                        1              2 */}
        <input value={this.props.value} onChange={e => this.props.onAmountChange(e.target.value, this.props.currency)} />
      </div>
    )
  }
}

export default CurrencyInput;