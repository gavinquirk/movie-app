import React, { useEffect } from 'react';
import './MovieDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../../actions/movieActions';

const MovieDetails = ({ history, match }) => {
  const dispatch = useDispatch();

  // -- State --
  const movieDetails = useSelector((state) => state.movieDetails);
  const { movieDetailsLoading, details } = movieDetails;

  //  -- Hooks --
  useEffect(() => {
    dispatch(fetchMovieDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div className='MovieDetails'>
      <h1>{details.original_title}</h1>
    </div>
  );
};

export default MovieDetails;
