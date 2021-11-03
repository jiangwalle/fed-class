import React, { Component } from 'react';

class FormExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      favouriteFruit: '',
      hobbies: [],
    };
  }

  handleUsernameChange = (event) => {
    const username = event.target.value;
    
    if (/^[A-Za-z ]*$/.test(username)) {
      this.setState({ username });
    }
  }

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleFavouriteFruitChange = (event) => {
    this.setState({ favouriteFruit: event.target.value });
  }

  handleHobbyChange = (event) => {
    console.log(`event.target.value: `, event.target.checked);
    debugger
    
    if (event.target.name === 'watchMovie') {
      if (event.target.checked) {
        if (!this.state.hobbies.includes('watchMovie')) {
          this.setState({ hobbies: [...this.state.hobbies, 'watchMovie'] });
        }
      } else {
        if (this.state.hobbies.includes('watchMovie')) {
          this.setState({ hobbies: this.state.hobbies.filter(hobby => hobby !== 'watchMovie') });
        }
      }
      this.setState({ hobby: event.target.checked });
    }
  }

  render() {
    const fruites = ['grapefruit', 'lime', 'coconut', 'mango', 'watermalon', 'peach'];

    return (
      <div className="center">
        <h2>Form Examples</h2>
        <form action="/login">
          <div>
            <label>Username: </label>
            <input value={this.state.username} onChange={this.handleUsernameChange} placeholder="Please input your username" name="username" size="30" />
          </div>

          <div>
            <label>Comment: </label>
            <textarea name="comment" value={this.state.comment} onChange={this.handleCommentChange} />
          </div>

          <div>
            <label>Favarite fruits: </label>
            <select name="favFruit" value={this.state.favouriteFruit} onChange={this.handleFavouriteFruitChange}>
              <option></option>
              {fruites.map(fruit => (
                <option key={fruit} value={fruit}>{fruit}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Hobbies: </label>

            <input id="readBook" name="readBook" type="checkbox" onChange={this.handleHobbyChange} />
            <label for="readBook">Read Books</label>
            <input id="watchMovie" name="watchMovie" type="checkbox" onChange={this.handleHobbyChange} />
            <label for="watchMovie">Watch Movie</label>
            <input id="playGames" name="playGames" type="checkbox" onChange={this.handleHobbyChange} />
            <label for="playGames">Play Games</label>
          </div>

          <hr/>
          <button onclick>Submit</button>
        </form>
      </div>
    )
  }
}

export default FormExample;