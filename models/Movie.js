const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  poster: {
    type: String,
    required: false,
  },
  smallPoster: {
    type: String,
    required: false,
  },
  imdbId: {
    type: String,
    required: false,
  },
  imdbURL: {
    type: String,
    required: false,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('movies', MovieSchema);
