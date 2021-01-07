const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.TMDB_API_KEY;

// @route   GET api/movies/top
// @desc    Retreive top rated movies
// @access  Public
router.get('/top', (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=5b9f102de58c3e10aef5b0af9364828a&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/popular
// @desc    Retreive most popular movies
// @access  Public
router.get('/popular', (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=wadd`;
});

// @route   GET api/movies/similar/:id
// @desc    Retreive movies similar to supplied id
// @access  Public
router.get('/similar/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/recommendations/:id
// @desc    Retreive recommended movies based on id
// @access  Public
router.get('/recommendations/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/providers/:id
// @desc    Retreive watch providers by id
// @access  Public
router.get('/providers/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/reviews/:id
// @desc    Retreive reviews by id
// @access  Public
router.get('/reviews/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/upcoming
// @desc    Retreive upcoming releases
// @access  Public
router.get('/upcoming', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/:id
// @desc    Get single movie
// @access  Public
router.get('/:id', (req, res) => {
  const movie_id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

module.exports = router;
