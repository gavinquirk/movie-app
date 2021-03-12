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

// @route   GET api/movies/upcoming
// @desc    Retreive upcoming releases
// @access  Public
const getUpcomingMovies = asyncHandler(async (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/trending
// @desc    Retreive trending movies
// @access  Public
const getTrendingMovies = asyncHandler(async (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/movies/day?api_key=${API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/:id
// @desc    Get single movie
// @access  Public
const getSingleMovie = asyncHandler(async (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/:id/similar
// @desc    Retreive movies similar to supplied id
// @access  Public
const getSimilarMovies = asyncHandler(async (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/:id/providers
// @desc    Retreive watch providers by id
// @access  Public
const getMovieProviders = asyncHandler(async (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/:id/reviews
// @desc    Retreive reviews by id
// @access  Public
const getMovieReviews = asyncHandler(async (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// @route   GET api/movies/:id/recommendations
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
  getMovieProviders,
  getMovieReviews,
  getUpcomingMovies,
  getTrendingMovies,
  getSingleMovie,
};
