import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
    <div className='Card'>
      <Link to={`/${props.mediaType}/${props.data.id}`}>
        <img
          src={`http://image.tmdb.org/t/p/w185/${props.data.poster_path}`}
          alt={props.data.title}
        />
      </Link>
    </div>
  );
};

export default Card;
