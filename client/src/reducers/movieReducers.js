import {
  MOVIE_TOP_FAIL,
  MOVIE_TOP_REQUEST,
  MOVIE_TOP_SUCCESS,
} from '../constants/movieConstants';

// First, set loading to true and send empty array
// Second, set loading to false and send results
// If error,
export const movieReducer = (state = { topMovies: [] }, action) => {
  switch (action.type) {
    case MOVIE_TOP_REQUEST:
      return { loading: true, topMovies: [] };
    case MOVIE_TOP_SUCCESS:
      return {
        loading: false,
        topMovies: action.payload.results,
      };
    case MOVIE_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
