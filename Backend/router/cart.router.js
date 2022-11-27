import cors from "cors";
import express from 'express';

import { addItem, updateItem,deleteItem,getItems} from '../Controllers/cart.controllers.js';

const cartRouter = express.Router()
// app.use(cors());

cartRouter.post('/', addItem)
cartRouter.get('/', getItems)
cartRouter.patch('/:id', updateItem)
cartRouter.delete('/:id', deleteItem)

export default cartRouter