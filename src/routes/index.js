import { Router } from 'express';
import { getHome, getUsers } from '../controllers/userController.js';

const router = Router();

router.get('/', getHome);
router.get('/users', getUsers);

export default router;
