import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authmiddleware = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized, login again' });
    }
    
    try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // const decoded = jwt.verify(process.env.JWT_SECRET) || 'fallback-secret';
        req.body.userid = decoded.id;  // Ensure `userid` is used consistently
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

export default authmiddleware;
