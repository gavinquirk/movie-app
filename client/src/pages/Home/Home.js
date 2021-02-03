import React, { Component } from 'react';
import './Home.css';
import Card from '../../components/Card/Card';
import Grid from '../../components/Grid/Grid';

export default class Home extends Component {
  render() {
    const data = require('./tempdata.json');
    const movieList = data.results;
    // TODO: Fetch data from api and store in state
    console.log(movieList);

    return (
      <div className='Home'>
        <Grid data={movieList} />
      </div>
    );
  }
}
