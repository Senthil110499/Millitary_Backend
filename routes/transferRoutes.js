import express from 'express';
import { createTransfer, getTransfers } from '../controllers/transferController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', getTransfers);
router.post('/', roleMiddleware(['Admin', 'Logistics Officer']), createTransfer);

export default router;
