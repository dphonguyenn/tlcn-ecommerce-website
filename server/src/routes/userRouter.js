import express from 'express';
import { logOut, postInfoUserLogin, generateNewAccessToken, getAllOrders } from '../app/controllers/UserController.js';
import { verifyToken } from '../app/middlewares/index.js';
const router = express.Router();
router.post('/refresh-access-token', generateNewAccessToken);
router.post('/post-login', postInfoUserLogin);
router.get('/admin/orders/get-all', verifyToken, getAllOrders);
router.post('/logout', verifyToken, logOut);
export default router;
