import express from 'express';
import { createPurchase, getPurchases } from '../controllers/purchaseController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', getPurchases);
router.post('/', roleMiddleware(['Admin', 'Logistics Officer']), createPurchase);

export default router;