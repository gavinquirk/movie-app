import React from 'react';
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

export default Grid;
