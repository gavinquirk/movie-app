import {
  MOVIE_TOP_REQUEST,
  MOVIE_TOP_SUCCESS,
  MOVIE_TOP_FAIL,
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
  MOVIE_POPULAR_FAIL,
  MOVIE_TRENDING_REQUEST,
  MOVIE_TRENDING_SUCCESS,
  MOVIE_TRENDING_FAIL,
  MOVIE_UPCOMING_REQUEST,
  MOVIE_UPCOMING_SUCCESS,
  MOVIE_UPCOMING_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
} from '../constants/movieConstants';

export const fetchTopMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_TOP_REQUEST });

    const response = await fetch('http://localhost:5000/api/movies/top');
    const { results } = await response.json();

    dispatch({
      type: MOVIE_TOP_SUCCESS,
      payload: {
        results,
      },
    });
  } catch (error) {
    dispatch({
      type: MOVIE_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchPopularMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_POPULAR_REQUEST });

    const response = await fetch('http://localhost:5000/api/movies/popular');
    const { results } = await response.json();

    dispatch({
      type: MOVIE_POPULAR_SUCCESS,
      payload: {
        results,
      },
    });
  } catch (error) {
    dispatch({
      type: MOVIE_POPULAR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchTrendingMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_TRENDING_REQUEST });

    const response = await fetch('http://localhost:5000/api/movies/trending');
    const { results } = await response.json();

    dispatch({
      type: MOVIE_TRENDING_SUCCESS,
      payload: {
        results,
      },
    });
  } catch (error) {
    dispatch({
      type: MOVIE_TRENDING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_UPCOMING_REQUEST });

    const response = await fetch('http://localhost:5000/api/movies/upcoming');
    const { results } = await response.json();

    dispatch({
      type: MOVIE_UPCOMING_SUCCESS,
      payload: {
        results,
      },
    });
  } catch (error) {
    dispatch({
      type: MOVIE_UPCOMING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });

    const response = await fetch(`http://localhost:5000/api/movies/${id}`);
    const results = await response.json();

    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: {
        results,
      },
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
