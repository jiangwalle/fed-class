import React, { Component } from 'react';
import ButtonGroup from '../components/Button/ButtonGroup';
import Card from '../components/Card';
import styles from './HomePage.module.css';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  onDataChange = (data) => {
    console.log(`Home page movies: `, data);
    this.setState({ movies: data ? data.slice(0, 10) : [] });
  }

  render() {

    return (
      <div>
        <ButtonGroup onDataChange={this.onDataChange} />
        <div className={styles['movie-list']}>
          {this.state.movies.map(movie => (
            <Card key={movie.id} title={movie.title} image={movie.backdrop_path} id={movie.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default HomePage;