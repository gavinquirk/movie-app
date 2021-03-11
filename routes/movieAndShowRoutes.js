import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';

const API_KEY = process.env.TMDB_API_KEY;

// @route   GET api/all/trending
// @desc    Retreive trending movies and shows
// @access  Public
router.get('/trending', (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

export default router;
