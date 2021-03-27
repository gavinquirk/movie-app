import {
  MOVIE_TOP_FAIL,
  MOVIE_TOP_REQUEST,
  MOVIE_TOP_SUCCESS,
  MOVIE_POPULAR_FAIL,
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
  MOVIE_TRENDING_FAIL,
  MOVIE_TRENDING_REQUEST,
  MOVIE_TRENDING_SUCCESS,
  MOVIE_UPCOMING_FAIL,
  MOVIE_UPCOMING_REQUEST,
  MOVIE_UPCOMING_SUCCESS,
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

export const trendingMovieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_TRENDING_REQUEST:
      return { trendingMoviesloading: true, movies: [] };
    case MOVIE_TRENDING_SUCCESS:
      return {
        trendingMoviesLoading: false,
        movies: action.payload.results,
      };
    case MOVIE_TRENDING_FAIL:
      return { trendingMoviesLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const upcomingMovieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_UPCOMING_REQUEST:
      return { upcomingMoviesloading: true, movies: [] };
    case MOVIE_UPCOMING_SUCCESS:
      return {
        upcomingMoviesLoading: false,
        movies: action.payload.results,
      };
    case MOVIE_UPCOMING_FAIL:
      return { upcomingMoviesLoading: false, error: action.payload };
    default:
      return state;
  }
};
