import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import colors from 'colors';
import rateLimit from 'express-rate-limit';

const db = process.env.MONGO_URI;

// Import Routes
import movieRoutes from './routes/movieRoutes.js';
import showRoutes from './routes/showRoutes.js';
import movieAndShowRoutes from './routes/movieAndShowRoutes.js';
// TODO: USER ROUTES TO BE CHANGED TO CUSTOM AUTH INSTEAD OF PASSPORT
// import userRoutes from './routes/userRoutes.js';

// Initialize server
const app = express();

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 500,
});

// Express Middleware
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
app.use('/api/movies', movieRoutes);
app.use('/api/shows', showRoutes);
app.use('/api/all', movieAndShowRoutes);
// app.use('/api/users', userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`.yellow));
