const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.TMDB_API_KEY;

// @route   GET api/all/trending
// @desc    Retreive trending movies and shows
// @access  Public
router.get('/trending', (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => res.json(json));
});

module.exports = router;
