import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import Loader from '../../components/Loader/Loader';

import {
  fetchTopShows,
  fetchPopularShows,
  fetchTrendingShows,
} from '../../actions/showActions';
import './Shows.css';

const Shows = (props) => {
  const dispatch = useDispatch();

  const topShows = useSelector((state) => state.topShows);
  const { topShowsLoading } = topShows;

  const popularShows = useSelector((state) => state.popularShows);
  const { popularShowsLoading } = popularShows;

  const trendingShows = useSelector((state) => state.trendingShows);
  const { trendingShowsLoading } = trendingShows;

  useEffect(() => {
    dispatch(fetchTopShows());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPopularShows());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTrendingShows());
  }, [dispatch]);

  return (
    <div className='Shows'>
      <section>
        <h1>All Shows</h1>
      </section>
      <section id='top-rated-shows'>
        {topShowsLoading ? (
          <Loader />
        ) : (
          <Carousel
            category={'Top Rated Shows'}
            data={topShows.shows}
            mediaType={'shows'}
          />
        )}
      </section>
      <section id='popular-shows'>
        {popularShowsLoading ? (
          <Loader />
        ) : (
          <Carousel
            category={'Popular Shows'}
            data={popularShows.shows}
            mediaType={'shows'}
          />
        )}
      </section>
      <section id='trending-shows'>
        {trendingShowsLoading ? (
          <Loader />
        ) : (
          <Carousel
            category={'Trending Shows'}
            data={trendingShows.shows}
            mediaType={'shows'}
          />
        )}
      </section>
    </div>
  );
};

export default Shows;
