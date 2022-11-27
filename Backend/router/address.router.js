import express from 'express'
import {postaddress,getaddress,updateAdress} from '../Controllers/address.controller.js';

const addressRouter = express.Router();

addressRouter.post('/create/:id', postaddress)
addressRouter.get('/:id', getaddress)
addressRouter.patch('/:id', updateAdress)

export default addressRouter