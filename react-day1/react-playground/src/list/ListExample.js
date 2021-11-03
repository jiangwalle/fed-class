import React, { Component } from 'react';

class ListExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        'Watch movie',
        'Have dinner',
        'Play games'
      ]
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ListExample;