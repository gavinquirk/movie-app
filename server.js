require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

// Initialize server
const app = express();

// Apply middleware
app.use(cors());

// Routes
app.get('/popular', function (req, res) {
  const url = `https://api.themoviedb.org/3/movie/popular?&api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  fetch(url)
    .then((res) => res.text())
    .then((body) => res.json(body));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
