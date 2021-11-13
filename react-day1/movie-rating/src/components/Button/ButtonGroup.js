import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button';
import styles from './ButtonGroup.module.css'

class ButtonGroup extends Component {
  componentDidMount() {
    this.onClickOnShowing();
  }

  onClickOnShowing = async () => {
    // Call API to get movies list of now showing
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
    const res = await axios.get(url);
    const movies = res.data.results;
    // console.log(`movies: `, movies);

    this.props.onDataChange(movies);
  }

  onClickPopular = async () => {
    // Call API to get movies list of now showing
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
    const res = await axios.get(url);
    const movies = res.data.results;
    // console.log(`movies: `, movies);

    this.props.onDataChange(movies);
  }

  onClickLatest = async () => {
    // Call API to get movies list of now showing
    const url = `https://api.themoviedb.org/3/movie/latest?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
    const res = await axios.get(url);
    const movies = res.data.results;
    // console.log(`movies: `, movies);

    this.props.onDataChange(movies);
  }

  onClickTopRated = async () => {
    // Call API to get movies list of now showing
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
    const res = await axios.get(url);
    const movies = res.data.results;
    // console.log(`movies: `, movies);

    this.props.onDataChange(movies);
  }

  render() {
    return (
      <div className={styles['btn-group']}>
        <Button primary onClick={this.onClickOnShowing}>正在上映</Button>
        <Button onClick={this.onClickPopular}>最受欢迎</Button>
        <Button onClick={this.onClickLatest}>最新电影</Button>
        <Button onClick={this.onClickTopRated}>最受好评</Button>
      </div>
    )
  }
}

export default ButtonGroup;
