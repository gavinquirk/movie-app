import React, { Component } from 'react';
import './Home.css';
import Card from '../../components/Card/Card';

export default class Home extends Component {
  render() {
    const data = require('./tempdata.json');
    console.log(data);
    // TODO: Fetch data from api and store in state

    return (
      <div className='Home'>
        <section id='top'>
          {/* TODO: Map through cards here */}
          {data.results.map((result) => (
            <Card key={result.id} data={result} />
          ))}
        </section>
      </div>
    );
  }
}
