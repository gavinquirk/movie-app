const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const scraper = require('../../scrapers/scrapers');
const { formatImdbId } = require('../../utilities/helpers');

// Load Movie Model
const Movie = require('../../models/Movie');

// @route   GET api/movies/popular
// @desc    Retreive most popular movies
// @access  Public
router.get('/popular', (req, res) => {
  scraper.imdbPopular().then((data) => {
    res.json(data);
  });
});

// @route   GET api/movies/similar/:id
// @desc    Retreive movies similar to supplied id
// @access  Public
// router.get('/similar/:id', (req, res) => {
//   const movie_id = req.params.id;
//   const url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => res.json(json));
// });

// @route   GET api/movies/top
// @desc    Retreive top rated movies
// @access  Public
router.get('/top', (req, res) => {
  scraper.imdbTop().then((data) => {
    res.json(data);
  });
});

// @route   GET api/movies/:id
// @desc    Retreive movie by imdb id
// @access  Public
router.get('/:id', (req, res) => {
  // Check for movie in db BY IMDB ID. If doesnt exist, scrape movie from IMDB and add to db.

  // Retreive submitted imdb id
  const imdbId = formatImdbId(req.params.id);

  // Search database for movie
  Movie.findOne({ imdbId }).then((movie) => {
    // If movie already exists, send db data
    if (movie) {
      return res.status(200).json(movie);
    } else {
      // If movie does not exist, scrape data from imdb
      scraper.imdbSingle(imdbId).then((data) => {
        // Create new Movie object and save
        const newMovie = new Movie({
          ...data,
        });
        // Save movie to db and respond with data
        newMovie
          .save()
          .then((movie) => res.json({ ...movie._doc }))
          .catch((error) => console.log(error));
      });
    }
  });
});

module.exports = router;
