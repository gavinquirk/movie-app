const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.TMDB_API_KEY;

// @route   GET api/shows/top
// @desc    Retreive top rated shows
// @access  Public
router.get('/top', (req, res) => {
  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/shows/popular
// @desc    Retreive most popular shows
// @access  Public
router.get('/popular', (req, res) => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1&region=wadd`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

module.exports = router;
