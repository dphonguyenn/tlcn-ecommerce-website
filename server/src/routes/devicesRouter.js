import express from 'express';
import { getDetailedProduct, getProductsFollowType, getLaptops, deleteDevice, updateDevice, createDevice } from '../app/controllers/ProductController.js';
import { verifyToken } from '../app/middlewares/index.js';
const router = express.Router();


router.get('/product/:type_product/:id_product', getDetailedProduct);
router.get('/product/:type_product', getProductsFollowType);
router.get('/products', getLaptops);


router.post('/product/:type_product/delete', deleteDevice);

router.put('/product/:type_product/update', updateDevice);

router.post('/product/create', createDevice);





export default router;
