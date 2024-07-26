import express from 'express';
import { addFood, listfood, removefood } from '../controllers/foodConroller.js';


import multer from "multer"

const foodRouter = express.Router();
//image storg 
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cd) => {
        return cd(null, `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({ storage: storage })
foodRouter.post('/add', upload.single("image"), addFood)
foodRouter.get("/list", listfood)
foodRouter.post('/remove', removefood);

export default foodRouter;