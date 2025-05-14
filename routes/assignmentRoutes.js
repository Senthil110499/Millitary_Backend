import express from 'express';
import { createAssignment, getAssignments } from '../controllers/assignmentController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', getAssignments);
router.post('/', roleMiddleware(['Admin', 'Logistics Officer']), createAssignment);

export default router;
