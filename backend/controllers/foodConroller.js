import foodModel from "../models/foodMode.js";
import fs from 'fs';
const addFood = async (req, res) => {
    try {
        if (!req.file || !req.file.filename) {
            throw new Error("No file uploaded");
        }

        const image_filename = req.file.filename;
        const { name, description, price, category } = req.body;

        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: image_filename,
        });

        await food.save();
        res.json({ success: true, message: "Food added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
};

// all food list

const listfood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }
}
const removefood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        
        // Check if the food item exists
        if (!food) {
            return res.json({ success: false, message: "Food not found" });
        }

        // Attempt to delete the image file
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.error('File deletion error:', err);
            }
        });

        // Delete the food item from the database
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed" });
    } catch (error) {
        console.error("Error:", error); // Log the actual error for debugging
        res.json({ success: false, message: "Error occurred" });
    }
}
export { addFood, listfood, removefood };
