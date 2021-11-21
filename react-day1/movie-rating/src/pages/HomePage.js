import React, { Component } from 'react';
import ButtonGroup from '../components/Button/ButtonGroup';
import Card from '../components/Card';
import { ThemeContext } from '../context/ThemeContext';
import styles from './HomePage.module.css';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  onDataChange = (data) => {
    this.setState({ movies: data ? data.slice(0, 10) : [] });
  }

  render() {
    console.log(`HomePage context: `, this.context);
    // 4. 使用context：this.context来获取
    const themeClass = this.context.theme === 'light' ? styles.light : styles.dark;
    
    return (
      <div className={themeClass}>
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

// 3. 给组件指定context，这样在组件内就可以用this.context来获取context里的值
HomePage.contextType = ThemeContext;

export default HomePage;