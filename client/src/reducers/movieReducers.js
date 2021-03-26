import {
  MOVIE_TOP_FAIL,
  MOVIE_TOP_REQUEST,
  MOVIE_TOP_SUCCESS,
  MOVIE_POPULAR_FAIL,
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
} from '../constants/movieConstants';

// First, set loading to true and send empty array
// Second, set loading to false and send results
// If error,
export const topMovieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_TOP_REQUEST:
      return { topMoviesloading: true, movies: [] };
    case MOVIE_TOP_SUCCESS:
      return {
        topMoviesLoading: false,
        movies: action.payload.results,
      };
    case MOVIE_TOP_FAIL:
      return { topMoviesLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const popularMovieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_POPULAR_REQUEST:
      return { popularMoviesloading: true, movies: [] };
    case MOVIE_POPULAR_SUCCESS:
      return {
        popularMoviesLoading: false,
        movies: action.payload.results,
      };
    case MOVIE_POPULAR_FAIL:
      return { popularMoviesLoading: false, error: action.payload };
    default:
      return state;
  }
};
