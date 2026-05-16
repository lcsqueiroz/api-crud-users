import { Router } from 'express';
import { getUsers, postUser } from '../controllers/userController.js';

const router = Router();

router.post('/users', postUser);
router.get('/users', getUsers);

export default router;
