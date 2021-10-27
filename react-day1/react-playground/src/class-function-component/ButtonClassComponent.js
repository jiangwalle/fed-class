import React from 'react';

class ButtonClassComponent extends React.Component {
  constructor(props) {
    super();

    this.defaultSize = 'large';
  }

  render() {
    const size = this.props.size || this.defaultSize;
    return <button className={size}>{this.props.children}</button>;
  }
}

export default ButtonClassComponent;