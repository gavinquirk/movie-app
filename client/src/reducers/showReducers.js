import {
  SHOW_TOP_FAIL,
  SHOW_TOP_REQUEST,
  SHOW_TOP_SUCCESS,
  SHOW_POPULAR_REQUEST,
  SHOW_POPULAR_SUCCESS,
  SHOW_POPULAR_FAIL,
  SHOW_TRENDING_REQUEST,
  SHOW_TRENDING_SUCCESS,
  SHOW_TRENDING_FAIL,
} from '../constants/showConstants';

// First, set loading to true and send empty array
// Second, set loading to false and send results
// If error,
export const topShowReducer = (state = { shows: [] }, action) => {
  switch (action.type) {
    case SHOW_TOP_REQUEST:
      return { topShowsLoading: true, shows: [] };
    case SHOW_TOP_SUCCESS:
      return {
        topShowsLoading: false,
        shows: action.payload.results,
      };
    case SHOW_TOP_FAIL:
      return { topShowsLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const popularShowReducer = (state = { shows: [] }, action) => {
  switch (action.type) {
    case SHOW_POPULAR_REQUEST:
      return { popularShowsLoading: true, shows: [] };
    case SHOW_POPULAR_SUCCESS:
      return {
        popularShowsLoading: false,
        shows: action.payload.results,
      };
    case SHOW_POPULAR_FAIL:
      return { popularShowsLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const trendingShowReducer = (state = { shows: [] }, action) => {
  switch (action.type) {
    case SHOW_TRENDING_REQUEST:
      return { trendingShowsLoading: true, shows: [] };
    case SHOW_TRENDING_SUCCESS:
      return {
        trendingShowsLoading: false,
        shows: action.payload.results,
      };
    case SHOW_TRENDING_FAIL:
      return { trendingShowsLoading: false, error: action.payload };
    default:
      return state;
  }
};
