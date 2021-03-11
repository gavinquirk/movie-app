import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';

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

// @route   GET api/shows/similar/:id
// @desc    Retreive shows similar to supplied id
// @access  Public
router.get('/similar/:id', (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/shows/recommendations/:id
// @desc    Retreive recommended shows based on id
// @access  Public
router.get('/recommendations/:id', (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/shows/providers/:id
// @desc    Retreive watch providers by id
// @access  Public
router.get('/providers/:id', (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}/watch/providers?api_key=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/shows/reviews/:id
// @desc    Retreive reviews by id
// @access  Public
router.get('/reviews/:id', (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// TODO: This route is not working
// @route   GET api/shows/upcoming
// @desc    Retreive upcoming releases
// @access  Public
// router.get('/upcoming', (req, res) => {
//   const url = `https://api.themoviedb.org/3/tv/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => res.json(json));
// });

// @route   GET api/shows/trending
// @desc    Retreive trending shows
// @access  Public
router.get('/trending', (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/shows/:id
// @desc    Get single movie
// @access  Public
router.get('/:id', (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

export default router;
