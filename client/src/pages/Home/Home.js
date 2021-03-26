import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import logo from './logo-large.png';
import Loader from '../../components/Loader/Loader';
import './Home.css';
import {
  fetchTopMovies,
  fetchPopularMovies,
  fetchTrendingMovies,
} from '../../actions/movieActions';
import {
  fetchTopShows,
  fetchPopularShows,
  fetchTrendingShows,
} from '../../actions/showActions';

const Home = (props) => {
  const dispatch = useDispatch();

  // -- State --
  // Movies
  const topMovies = useSelector((state) => state.topMovies);
  const { topMoviesLoading } = topMovies;

  const popularMovies = useSelector((state) => state.popularMovies);
  const { popularMoviesLoading } = popularMovies;

  const trendingMovies = useSelector((state) => state.trendingMovies);
  const { trendingMoviesLoading } = trendingMovies;

  // Shows
  const topShows = useSelector((state) => state.topShows);
  const { topShowsLoading } = topShows;

  const popularShows = useSelector((state) => state.popularShows);
  const { popularShowsLoading } = popularShows;

  const trendingShows = useSelector((state) => state.trendingShows);
  const { trendingShowsLoading } = trendingShows;

  // -- Hooks --
  // Movies
  useEffect(() => {
    dispatch(fetchTopMovies());
  }, dispatch);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, dispatch);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, dispatch);

  // Shows
  useEffect(() => {
    dispatch(fetchTopShows());
  }, dispatch);

  useEffect(() => {
    dispatch(fetchPopularShows());
  }, dispatch);

  useEffect(() => {
    dispatch(fetchTrendingShows());
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
      <section id='popular-movies'>
        {popularMoviesLoading ? (
          <Loader />
        ) : (
          <Carousel category={'Popular Movies'} data={popularMovies.movies} />
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
      <section id='trending-movies'>
        {trendingMoviesLoading ? (
          <Loader />
        ) : (
          <Carousel category={'Trending Movies'} data={trendingMovies.movies} />
        )}
      </section>
      <section id='trending-shows'>
        {trendingShowsLoading ? (
          <Loader />
        ) : (
          <Carousel category={'Trending Shows'} data={trendingShows.shows} />
        )}
      </section>
    </div>
  );
};

export default Home;
