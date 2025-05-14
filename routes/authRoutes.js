import express from 'express';
import { login } from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/login', login);

export default router;
