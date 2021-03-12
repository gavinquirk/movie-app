import express from 'express';
import {
  getTopShows,
  getPopularShows,
  // getUpcomingShows,
  getTrendingShows,
  getSingleShow,
  getSimilarShows,
  getShowProviders,
  getShowReviews,
  getRecommendedShows,
} from '../controllers/showController.js';

const router = express.Router();

router.route('/top').get(getTopShows);
router.route('/popular').get(getPopularShows);
// router.route('/upcoming').get(getUpcomingShows);
router.route('/trending').get(getTrendingShows);
router.route('/:id').get(getSingleShow);
router.route('/:id/similar').get(getSimilarShows);
router.route('/:id/providers').get(getShowProviders);
router.route('/:id/reviews').get(getShowReviews);
router.route('/:id/recommendations').get(getRecommendedShows);

export default router;
