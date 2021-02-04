const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
import { getTopMovies } from '../controllers/movieController';

const API_KEY = process.env.TMDB_API_KEY;

router.route('/').get(getTopMovies);

// @route   GET api/movies/popular
// @desc    Retreive most popular movies
// @access  Public
router.get('/popular', (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/similar/:id
// @desc    Retreive movies similar to supplied id
// @access  Public
router.get('/similar/:id', (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/recommendations/:id
// @desc    Retreive recommended movies based on id
// @access  Public
router.get('/recommendations/:id', (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/providers/:id
// @desc    Retreive watch providers by id
// @access  Public
router.get('/providers/:id', (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/reviews/:id
// @desc    Retreive reviews by id
// @access  Public
router.get('/reviews/:id', (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/upcoming
// @desc    Retreive upcoming releases
// @access  Public
router.get('/upcoming', (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/trending
// @desc    Retreive trending movies
// @access  Public
router.get('/trending', (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/movies/day?api_key=${API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/:id
// @desc    Get single movie
// @access  Public
router.get('/:id', (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

module.exports = router;
