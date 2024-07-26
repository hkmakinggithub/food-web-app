import express from 'express';
import authmiddleware from '../middleware/auth.js';
import { addtocart, removecart, getcartdata } from '../controllers/cartconroller.js';

const cartrouter = express.Router();

cartrouter.post('/add', authmiddleware, addtocart);
cartrouter.post('/remove', authmiddleware, removecart);
cartrouter.post('/get', authmiddleware, getcartdata);

export default cartrouter;
