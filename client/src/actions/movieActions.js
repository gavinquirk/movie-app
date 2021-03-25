import { MOVIE_FETCH_TOP } from '../constants/movieConstants';

export const fetchTopMovies = () => async (dispatch, getState) => {
  const response = await fetch('http://localhost:5000/api/movies/top');
  const data = await response.json();
  const results = data.results;

  dispatch({
    type: MOVIE_FETCH_TOP,
    payload: {
      results,
    },
  });
};
