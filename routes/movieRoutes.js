import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';
import {
  getTopMovies,
  getPopularMovies,
  getSimilarMovies,
  getRecommendedMovies,
} from '../controllers/movieController.js';

const API_KEY = process.env.TMDB_API_KEY;

router.route('/').get(getTopMovies);
router.route('/popular').get(getPopularMovies);
router.route('/similar/:id').get(getSimilarMovies);
router.route('/recommendations/:id').get(getRecommendedMovies);

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

export default router;
