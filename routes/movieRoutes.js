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
router.route('/similar/:id').get(getSimilarMovies);
router.route('/recommendations/:id').get(getRecommendedMovies);
router.route('/providers/:id').get(getMovieProviders);
router.route('/reviews/:id').get(getMovieReviews);
router.route('/upcoming').get(getUpcomingMovies);
router.route('/trending').get(getTrendingMovies);
router.route('/:id').get(getSingleMovie);

export default router;
