import { Router } from 'express';
import { getUsers, postUser, putUser } from '../controllers/userController.js';

const router = Router();

router.post('/users', postUser);
router.get('/users', getUsers);
router.put('/users/:id', putUser);

export default router;
