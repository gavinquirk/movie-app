import {
  SHOW_TOP_FAIL,
  SHOW_TOP_REQUEST,
  SHOW_TOP_SUCCESS,
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
