import express from 'express';
import { loginuser, registeruser } from '../controllers/UserConroller.js';

const userrouter = express.Router();

// Route for user registration
userrouter.post('/register', registeruser);

// Route for user login
userrouter.post('/login', loginuser);

export default userrouter;
