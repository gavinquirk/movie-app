import React, { Component } from 'react';

export default class Popular extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getPopularMovies();
  }

  getPopularMovies = async () => {
    const url = 'http://localhost:5000/popular';
    fetch(url)
      .then((res) => res.json())
      .then((json) => this.setState({ movies: json }));
  };

  render() {
    return (
      <div className='Popular'>
        <h2>Popular</h2>
      </div>
    );
  }
}
