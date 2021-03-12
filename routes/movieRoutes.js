import express from 'express';
import {
  getTopMovies,
  getPopularMovies,
  getSimilarMovies,
  getRecommendedMovies,
  getMovieProviders,
  getMovieReviews,
  getUpcomingMovies,
  getTrendingMovies,
  getSingleMovie,
} from '../controllers/movieController.js';

const router = express.Router();

router.route('/top').get(getTopMovies);
router.route('/popular').get(getPopularMovies);
router.route('/upcoming').get(getUpcomingMovies);
router.route('/trending').get(getTrendingMovies);
router.route('/:id').get(getSingleMovie);
router.route('/:id/similar').get(getSimilarMovies);
router.route('/:id/providers').get(getMovieProviders);
router.route('/:id/reviews').get(getMovieReviews);
router.route('/:id/recommendations').get(getRecommendedMovies);

export default router;
