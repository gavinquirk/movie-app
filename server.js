require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

// Initialize server
const app = express();

// Apply middleware
app.use(cors());

// Routes
// Get Popular Movies
app.get('/movies/popular', (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/popular?&api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// Get Movie By ID
app.get('/movies/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
