import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { topMovieReducer, popularMovieReducer } from './reducers/movieReducers';
import {
  topShowReducer,
  popularShowReducer,
  trendingShowReducer,
} from './reducers/showReducers';

// All reducers will be combined
const reducer = combineReducers({
  topMovies: topMovieReducer,
  popularMovies: popularMovieReducer,
  topShows: topShowReducer,
  popularShows: popularShowReducer,
  trendingShows: trendingShowReducer,
});

// Redux will load with this initial state
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
