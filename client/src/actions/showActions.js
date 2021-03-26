import {
  SHOW_TOP_REQUEST,
  SHOW_TOP_SUCCESS,
  SHOW_TOP_FAIL,
} from '../constants/showConstants';

export const fetchTopShows = () => async (dispatch) => {
  try {
    dispatch({ type: SHOW_TOP_REQUEST });

    const response = await fetch('http://localhost:5000/api/shows/top');
    const { results } = await response.json();

    dispatch({
      type: SHOW_TOP_SUCCESS,
      payload: {
        results,
      },
    });
  } catch (error) {
    dispatch({
      type: SHOW_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
