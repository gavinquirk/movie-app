import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Grid.css';

const Grid = (props) => {
  return (
    <div className='Grid'>
      {props.data.map((result) => (
        <Card key={result.id} data={result} />
      ))}
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.array,
};

export default Grid;
