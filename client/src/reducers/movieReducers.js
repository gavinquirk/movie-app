import { MOVIE_FETCH_TOP } from '../constants/movieConstants';

export const movieReducer = (state = { topMovies: [] }, action) => {
  switch (action.type) {
    case MOVIE_FETCH_TOP:
      const movies = action.payload.results;
      return {
        ...state,
        topMovies: movies,
      };
    default:
      return state;
  }
};
