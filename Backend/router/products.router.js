import express from 'express'
import { getProduct } from '../Controllers/products.controller';

const productRouter = express.Router();
productRouter.get('/products', getProduct)

export default productRouter