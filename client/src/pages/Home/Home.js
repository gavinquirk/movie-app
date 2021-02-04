import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import logo from './logo-large.png';
import './Home.css';

const Home = (props) => {
  // State
  const [topMovies, setTopMovies] = useState([]);
  const [topShows, setTopShows] = useState([]);
  const [popularShows, setPopularShows] = useState([]);

  // Hooks
  useEffect(() => {
    fetchTopMovies();
    fetchTopShows();
    fetchPopularShows();
  }, []);

  const fetchTopMovies = async () => {
    const response = await fetch('http://localhost:5000/api/movies/top');
    const data = await response.json();
    setTopMovies(data.results);
  };

  const fetchTopShows = async () => {
    const response = await fetch('http://localhost:5000/api/shows/top');
    const data = await response.json();
    setTopShows(data.results);
  };

  const fetchPopularShows = async () => {
    const response = await fetch('http://localhost:5000/api/shows/popular');
    const data = await response.json();
    setPopularShows(data.results);
  };

  console.log(topMovies);

  return (
    <div className='Home'>
      <section className='logo'>
        <img src={logo} alt={'logo'} />
        <h1>Movie App</h1>
      </section>
      <section id='top-rated-movies'>
        <Carousel category={'Top Rated Movies'} data={topMovies} />
      </section>
      <section id='top-rated-shows'>
        <Carousel category={'Top Rated Shows'} data={topShows} />
      </section>
      <section id='popular-shows'>
        <Carousel category={'Popular Shows'} data={popularShows} />
      </section>
    </div>
  );
};

export default Home;
