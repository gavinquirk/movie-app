import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img
        src={`http://image.tmdb.org/t/p/w185/${props.data.poster_path}`}
        alt={props.data.title}
      />
    </div>
  );
};

export default Card;
