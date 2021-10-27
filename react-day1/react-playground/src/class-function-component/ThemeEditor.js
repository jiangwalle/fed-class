import React from 'react';

class ThemeEditor extends React.Component {
  // constructor(props) {

  // }

  render() {
    return (
      <div>
        <h3>Theme Editor</h3>
        <p>Current theme is: {this.props.theme}</p>
        <button >Change Theme</button>
      </div>
    )
  }
}

export default ThemeEditor;