import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import colors from 'colors';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import connectDB from './config/db.js';

const db = process.env.MONGO_URI;

// Import Routes
import movieRoutes from './routes/movieRoutes.js';
import showRoutes from './routes/showRoutes.js';
import movieAndShowRoutes from './routes/movieAndShowRoutes.js';
// TODO: USER ROUTES TO BE CHANGED TO CUSTOM AUTH INSTEAD OF PASSPORT
// import userRoutes from './routes/userRoutes.js';

// Connect to Database
connectDB();

// Initialize server
const app = express();

// Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 500,
});

// Express Middleware
app.use(limiter);
app.use(express.json());
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

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
