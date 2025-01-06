import express from 'express';
import { deleteUser, fetch  } from '../controller/userController.js';
import { create } from '../controller/userController.js';
import { update } from '../controller/userController.js';

const router = express.Router()

router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/deleteUser/:id',deleteUser)

export default router;