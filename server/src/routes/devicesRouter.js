import express from 'express';
import { getDetailedProduct, getProductsFollowType, getLaptops, deleteDevices } from '../app/controllers/ProductController.js';
import { verifyToken } from '../app/middlewares/index.js';
const router = express.Router();


router.get('/product/:type_product/:id_product', getDetailedProduct);
router.get('/product/:type_product', getProductsFollowType);
router.get('/products', getLaptops);


router.delete('/products/:type_product/:id_product', verifyToken, deleteDevices);
router.put('/products/:type_product/:id_product', verifyToken, deleteDevices);
router.post('/products/:type_product', verifyToken, deleteDevices);



export default router;
