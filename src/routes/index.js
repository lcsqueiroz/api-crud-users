import { Router } from 'express';
import {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/userController.js';

const router = Router();

router.post('/users', postUser);
router.get('/users', getUsers);
router.put('/users/:id', putUser);
router.delete('/users/:id', deleteUser);

export default router;
