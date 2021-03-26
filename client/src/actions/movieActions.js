import {
  MOVIE_TOP_REQUEST,
  MOVIE_TOP_SUCCESS,
  MOVIE_TOP_FAIL,
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
  MOVIE_POPULAR_FAIL,
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
