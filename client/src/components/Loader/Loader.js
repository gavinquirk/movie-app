import React from 'react';
import './Loader.css';
import spinner from './spinner.png';

const Loader = () => {
  return (
    <div className='Loader'>
      <img src={spinner} alt={'spinner'} />
    </div>
  );
};

export default Loader;
