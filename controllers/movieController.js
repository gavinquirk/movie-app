import asyncHandler from 'express-async-handler';
import fetch from 'node-fetch';

// @route   GET api/movies/top
// @desc    Retreive top rated movies
// @access  Public
const getTopMovies = asyncHandler(async (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

export { getTopMovies };
