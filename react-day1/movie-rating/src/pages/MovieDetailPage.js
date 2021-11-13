import React, { Component } from 'react';
import { withRouter } from '../hoc/withRouter';

class MovieDetailPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>Movie Detail Page</div>
    )
  }
}

export default withRouter(MovieDetailPage);