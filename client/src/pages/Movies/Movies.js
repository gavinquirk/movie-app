import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Movies.css';

const Movies = (props) => {
  // State
  const [topMovies, setTopMovies] = useState([]);

  // Hooks
  useEffect(() => {
    fetchTopMovies();
  }, []);

  const fetchTopMovies = async () => {
    const response = await fetch('http://localhost:5000/api/movies/top');
    const data = await response.json();
    setTopMovies(data.results);
  };

  return (
    <div className='Movies'>
      <section>
        <h1>All Movies</h1>
      </section>
      <section id='top-rated-movies'>
        <Carousel category={'Top Rated Movies'} data={topMovies} />
      </section>
    </div>
  );
};

export default Movies;
