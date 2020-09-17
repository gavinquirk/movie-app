require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = process.env.MLAB_URI;

// Import Routes
const movies = require('./routes/api/movies');
const users = require('./routes/api/users');

// Initialize server
const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Apply middleware
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.log(error));

// Use Routes
app.use('/api/movies', movies);
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
