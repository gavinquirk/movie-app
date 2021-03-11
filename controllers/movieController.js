import asyncHandler from 'express-async-handler';
import fetch from 'node-fetch';

const API_KEY = process.env.TMDB_API_KEY;

// @route   GET api/movies/top
// @desc    Retreive top rated movies
// @access  Public
const getTopMovies = asyncHandler(async (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/popular
// @desc    Retreive most popular movies
// @access  Public
const getPopularMovies = asyncHandler(async (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/similar/:id
// @desc    Retreive movies similar to supplied id
// @access  Public
const getSimilarMovies = asyncHandler(async (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/recommendations/:id
// @desc    Retreive recommended movies based on id
// @access  Public
const getRecommendedMovies = asyncHandler(async (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

export {
  getTopMovies,
  getPopularMovies,
  getSimilarMovies,
  getRecommendedMovies,
};
