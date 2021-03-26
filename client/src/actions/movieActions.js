import {
  MOVIE_TOP_REQUEST,
  MOVIE_TOP_SUCCESS,
  MOVIE_TOP_FAIL,
} from '../constants/movieConstants';

export const fetchTopMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_TOP_REQUEST });

    const response = await fetch('http://localhost:5000/api/movies/top');
    const data = await response.json();
    const results = data.results;

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
