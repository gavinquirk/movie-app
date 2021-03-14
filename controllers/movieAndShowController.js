import asyncHandler from 'express-async-handler';
import fetch from 'node-fetch';

const API_KEY = process.env.TMDB_API_KEY;

// @route   GET api/all/trending
// @desc    Retreive trending movies and shows
// @access  Public
const getAllTrending = asyncHandler(async (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

export { getAllTrending };
