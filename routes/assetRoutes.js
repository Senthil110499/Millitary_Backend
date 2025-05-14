import express from 'express';
import { getAssets, createAsset } from '../controllers/assetController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', getAssets);
router.post('/', roleMiddleware(['Admin', 'Logistics Officer']), createAsset);

export default router;
