import express from 'express';
import { getDetailedProduct, getProductsFollowType, getLaptops } from '../app/controllers/ProductController.js';
const router = express.Router();
router.get('/product/:type_product/:id_product', getDetailedProduct);
router.get('/product/:type_product', getProductsFollowType);
router.get('/', getLaptops)
export default router;