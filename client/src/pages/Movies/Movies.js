import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import Loader from '../../components/Loader/Loader';

import {
  fetchTopMovies,
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '../../actions/movieActions';
import './Movies.css';

const Movies = (props) => {
  const dispatch = useDispatch();

  const topMovies = useSelector((state) => state.topMovies);
  const { topMoviesLoading } = topMovies;

  const popularMovies = useSelector((state) => state.popularMovies);
  const { popularMoviesLoading } = popularMovies;

  const trendingMovies = useSelector((state) => state.trendingMovies);
  const { trendingMoviesLoading } = trendingMovies;

  const upcomingMovies = useSelector((state) => state.upcomingMovies);
  const { upcomingMoviesLoading } = upcomingMovies;

  useEffect(() => {
    dispatch(fetchTopMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <div className='Movies'>
      <section>
        <h1>All Movies</h1>
      </section>
      <section id='top-rated-movies'>
        {topMoviesLoading ? (
          <Loader />
        ) : (
          <Carousel
            mediaType={'movies'}
            category={'Top Rated Movies'}
            data={topMovies.movies}
          />
        )}
      </section>
      <section id='popular-movies'>
        {popularMoviesLoading ? (
          <Loader />
        ) : (
          <Carousel
            category={'Popular Movies'}
            data={popularMovies.movies}
            mediaType={'movies'}
          />
        )}
      </section>
      <section id='trending-movies'>
        {trendingMoviesLoading ? (
          <Loader />
        ) : (
          <Carousel
            category={'Trending Movies'}
            data={trendingMovies.movies}
            mediaType={'movies'}
          />
        )}
      </section>
      <section id='upcoming-movies'>
        {upcomingMoviesLoading ? (
          <Loader />
        ) : (
          <Carousel
            category={'Upcoming Movies'}
            data={upcomingMovies.movies}
            mediaType={'movies'}
          />
        )}
      </section>
    </div>
  );
};

export default Movies;
