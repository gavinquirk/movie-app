import React, { Component } from 'react';

export default class Popular extends Component {
  componentDidMount() {
    // TEMP
    fetch('http://localhost:5000/popular')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className='Popular'>
        <h2>Popular</h2>
      </div>
    );
  }
}
