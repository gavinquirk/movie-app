import React from 'react';
// Modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route path='/movies/:id' component={MovieDetails} />
          <Route exact path='/movies' component={Movies} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
