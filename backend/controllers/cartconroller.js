import usermodel from '../models/UserModle.js';

const addtocart = async (req, res) => {
    try {
        let userdata = await usermodel.findById(req.body.userid);
        if (!userdata) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        let cartdata = userdata.cartdata || {};
        if (!cartdata[req.body.itemid]) {
            cartdata[req.body.itemid] = 1;
        } else {
            cartdata[req.body.itemid] += 1;
        }
        
        await usermodel.findByIdAndUpdate(req.body.userid, { cartdata });
        res.json({ success: true, message: 'Added to cart' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error adding to cart' });
    }
};

const removecart = async (req, res) => {
    // Implement this function
    // Don't forget to handle errors and provide meaningful responses
};

const getcartdata = async (req, res) => {
    // Implement this function
    // Don't forget to handle errors and provide meaningful responses
};

export { addtocart, removecart, getcartdata };
