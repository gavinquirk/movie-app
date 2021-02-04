import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Movies.css';

const Movies = (props) => {
  // State
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  // Hooks
  useEffect(() => {
    fetchTopMovies();
    fetchPopularMovies();
    fetchUpcomingMovies();
  }, []);

  const fetchTopMovies = async () => {
    const response = await fetch('http://localhost:5000/api/movies/top');
    const data = await response.json();
    setTopMovies(data.results);
  };

  const fetchPopularMovies = async () => {
    const response = await fetch('http://localhost:5000/api/movies/popular');
    const data = await response.json();
    setPopularMovies(data.results);
  };

  const fetchUpcomingMovies = async () => {
    const response = await fetch('http://localhost:5000/api/movies/upcoming');
    const data = await response.json();
    setUpcomingMovies(data.results);
  };

  return (
    <div className='Movies'>
      <section>
        <h1>All Movies</h1>
      </section>
      <section>
        <Carousel category={'Top Rated Movies'} data={topMovies} />
      </section>
      <section>
        <Carousel category={'Popular Movies'} data={popularMovies} />
      </section>
      <section>
        <Carousel category={'Upcoming Movies'} data={upcomingMovies} />
      </section>
    </div>
  );
};

export default Movies;
