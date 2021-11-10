import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'page1'
    };
  }

  navigate = (page) => {
    this.setState({ route: page });
    window.history.pushState("", "", page);
  }

  render() {
    return (
      <div>
        <div>
          <a href="#" onClick={() => this.navigate('page1')}>Page1</a>
          <a href="#" onClick={() => this.navigate('page2')}>Page2</a>
        </div>
        {this.state.route === 'page1' && <Page1 />}
        {this.state.route === 'page2' && <Page2 />}
      </div>
    )
  }
}

export default Container;