import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from '../hoc/withRouter';
import styles from './MovieDetailPage.module.css';

class MovieDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {}
    }
  }

  async componentDidMount() {
    const movieId = this.props.params.id;
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US`);
    this.setState({ movie: res.data });
  }

  render() {
    const { title, overview, popularity, poster_path, release_date, revenue, budget, vote_average } = this.state.movie;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    return (
      <div>
        <div className={styles.section}>
          <Link to="/">&lt;返回</Link>
        </div>
        <h1>{title}</h1>
        <h2>电影简介</h2>
        <p>{overview}</p>
        <hr/>
        <div className={styles.section}>
          <div className={styles.item}>
            <span>票房</span>
            <span>${revenue}</span>
          </div>
          <div className={styles.item}>
            <span>成本</span>
            <span>${budget}</span>
          </div>
          <div className={styles.item}>
            <span>上映日期</span>
            <span>{release_date}</span>
          </div>
          <div className={styles.item}>
            <span>评分</span>
            <span>{vote_average}</span>
          </div>
        </div>
        <img alt="" src={`${imageBaseUrl}${poster_path}`} />
      </div>
    )
  }

}

export default withRouter(MovieDetailPage);