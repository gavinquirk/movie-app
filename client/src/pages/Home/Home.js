import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import logo from './logo-large.png';
import Loader from '../../components/Loader/Loader';
import './Home.css';
import { fetchTopMovies } from '../../actions/movieActions';
import { fetchTopShows, fetchPopularShows } from '../../actions/showActions';

const Home = (props) => {
  const dispatch = useDispatch();

  // State
  const topMovies = useSelector((state) => state.topMovies);
  const { topMoviesLoading } = topMovies;

  const topShows = useSelector((state) => state.topShows);
  const { topShowsLoading } = topShows;

  const popularShows = useSelector((state) => state.popularShows);
  const { popularShowsLoading } = popularShows;

  // Hooks
  useEffect(() => {
    dispatch(fetchTopMovies());
  }, dispatch);

  useEffect(() => {
    dispatch(fetchTopShows());
  }, dispatch);

  useEffect(() => {
    dispatch(fetchPopularShows());
  }, dispatch);

  return (
    <div className='Home'>
      <section className='logo'>
        <img src={logo} alt={'logo'} />
        <h1>Movie App</h1>
      </section>
      <section id='top-rated-movies'>
        {topMoviesLoading ? (
          <Loader />
        ) : (
          <Carousel category={'Top Rated Movies'} data={topMovies.movies} />
        )}
      </section>
      <section id='top-rated-shows'>
        {topShowsLoading ? (
          <Loader />
        ) : (
          <Carousel category={'Top Rated Shows'} data={topShows.shows} />
        )}
      </section>
      <section id='popular-shows'>
        {popularShowsLoading ? (
          <Loader />
        ) : (
          <Carousel category={'Popular Shows'} data={popularShows.shows} />
        )}
      </section>
    </div>
  );
};

export default Home;
