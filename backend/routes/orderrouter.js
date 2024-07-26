import express from "express"
import authmiddleware from "../middleware/auth.js"
import { placeorder } from "../controllers/orderConroller.js"


const orderrouter = express.Router();
orderrouter.post("/place",authmiddleware,placeorder);
export default orderrouter