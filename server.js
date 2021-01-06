require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
var colors = require('colors');
const rateLimit = require('express-rate-limit');

const db = process.env.MONGO_URI;

// Import Routes
const movies = require('./routes/api/movies');
const users = require('./routes/api/users');

// Initialize server
const app = express();

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 500,
});

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(limiter);

// Apply middleware
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'.blue))
  .catch((error) => console.log(error));

// Use Routes
app.use('/api/movies', movies);
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`.yellow));
