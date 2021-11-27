import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import ButtonGroup from '../components/Button/ButtonGroup';
import Card from '../components/Card';
import { ThemeContext } from '../context/ThemeContext';
import styles from './HomePage.module.css';

const HomePage = (props) => {
  const movies = useSelector((state) => state.movie.movies);
  const { theme } = useContext(ThemeContext);
  
  const themeClass = theme === 'light' ? styles.light : styles.dark;
  
  return (
    <div className={themeClass}>
      <ButtonGroup />
      <div className={styles['movie-list']}>
        {movies ? movies.map(movie => (
          <Card key={movie.id} title={movie.title} image={movie.backdrop_path} id={movie.id} />
        )) : "没找到任何电影"}
      </div>
    </div>
  )
}

export default HomePage;
