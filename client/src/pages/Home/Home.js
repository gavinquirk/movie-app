import React, { Component } from 'react';
import './Home.css';
import Card from '../../components/Card/Card';
import Grid from '../../components/Grid/Grid';
import Carousel from '../../components/Carousel/Carousel';
import logo from './logo-large.png';

export default class Home extends Component {
  render() {
    const data = require('./tempdata.json');
    const movieList = data.results;
    // TODO: Fetch data from api and store in state
    return (
      <div className='Home'>
        <div className='logo'>
          <img src={logo} alt={'logo'} />
          <h1>Movie App</h1>
        </div>
        <Carousel category={'Top Rated'} data={movieList} />
        {/* <Grid data={movieList} /> */}
      </div>
    );
  }
}
