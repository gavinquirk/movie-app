import asyncHandler from 'express-async-handler';
import fetch from 'node-fetch';

const API_KEY = process.env.TMDB_API_KEY;

// @route   GET api/shows/top
// @desc    Retreive top rated shows
// @access  Public
const getTopShows = asyncHandler(async (req, res) => {
  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

// @route   GET api/shows/popular
// @desc    Retreive most popular shows
// @access  Public
const getPopularShows = asyncHandler(async (req, res) => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1&region=wadd`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

// TODO: This route is not working
// @route   GET api/shows/upcoming
// @desc    Retreive upcoming releases
// @access  Public
// const getUpcomingShows = asyncHandler(async (req, res) => {
//   const url = `https://api.themoviedb.org/3/tv/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
//    const response = await fetch(url);
//    const data = await response.json();
//    res.json(data);
// });

// @route   GET api/shows/trending
// @desc    Retreive trending shows
// @access  Public
const getTrendingShows = asyncHandler(async (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

// @route   GET api/shows/:id
// @desc    Get single movie
// @access  Public
const getSingleShow = asyncHandler(async (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

// @route   GET api/shows/:id/similar
// @desc    Retreive shows similar to supplied id
// @access  Public
const getSimilarShows = asyncHandler(async (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

// @route   GET api/shows/:id/providers
// @desc    Retreive watch providers by id
// @access  Public
const getShowProviders = asyncHandler(async (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}/watch/providers?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

// @route   GET api/shows/:id/reviews
// @desc    Retreive reviews by id
// @access  Public
const getShowReviews = asyncHandler(async (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

// @route   GET api/shows/:id/recommendations
// @desc    Retreive recommended shows based on id
// @access  Public
const getRecommendedShows = asyncHandler(async (req, res) => {
  const showId = req.params.id;
  const url = `https://api.themoviedb.org/3/tv/${showId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

export {
  getTopShows,
  getPopularShows,
  // getUpcomingShows,
  getTrendingShows,
  getSingleShow,
  getSimilarShows,
  getShowProviders,
  getShowReviews,
  getRecommendedShows,
};
