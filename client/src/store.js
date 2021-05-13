import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  topMovieReducer,
  popularMovieReducer,
  trendingMovieReducer,
  upcomingMovieReducer,
  movieDetailsReducer,
} from './reducers/movieReducers';
import {
  topShowReducer,
  popularShowReducer,
  trendingShowReducer,
} from './reducers/showReducers';
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './reducers/userReducers';

// All reducers will be combined
const reducer = combineReducers({
  topMovies: topMovieReducer,
  popularMovies: popularMovieReducer,
  trendingMovies: trendingMovieReducer,
  upcomingMovies: upcomingMovieReducer,
  movieDetails: movieDetailsReducer,
  topShows: topShowReducer,
  popularShows: popularShowReducer,
  trendingShows: trendingShowReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});

// User info stored in local storage to be used in initial state if exists
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// Redux will load with this initial state
const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
