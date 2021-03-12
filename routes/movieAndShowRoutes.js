import express from 'express';
import { getAllTrending } from '../controllers/movieAndShowController.js';

const router = express.Router();

router.route('/trending').get(getAllTrending);

export default router;
