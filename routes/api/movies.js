const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const scraper = require('../../scrapers/scrapers');

// @route   GET api/movies/popular
// @desc    Retreive most popular movies
// @access  Public
router.get('/popular', (req, res) => {
  scraper.imdbPopular().then((data) => {
    res.json(data);
  });
});

// @route   GET api/movies/similar/:id
// @desc    Retreive movies similar to supplied id
// @access  Public
router.get('/similar/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/top
// @desc    Retreive top rated movies
// @access  Public
router.get('/top', (req, res) => {
  scraper.imdbTop().then((data) => {
    res.json(data);
  });
});

// @route   GET api/movies/:id
// @desc    Retreive movie by id. Must come last
// @access  Public
router.get('/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

module.exports = router;
