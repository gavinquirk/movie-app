import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieReducer } from './reducers/movieReducers';

// All reducers will be combined
const reducer = combineReducers({
  topMovies: movieReducer,
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
