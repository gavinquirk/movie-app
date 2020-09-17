const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Get Popular Movies
router.get('/popular', (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/popular?&api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// Get Similar Movies
router.get('/similar/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// Get Top Rated Movies
router.get('/top', (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// Get Movie By ID. Must come last because of id param
router.get('/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

module.exports = router;
