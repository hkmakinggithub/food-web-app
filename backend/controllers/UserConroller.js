import usermodel from "../models/UserModle.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

const loginuser = async (req, res) => {

const{email,password}= req.body;
try {
    const user=await usermodel.findOne({email});
    if(!user){
        return res.json({success:false,message:"user doesnt exits"})
    }
    const ismatch= await bcrypt.compare(password,user.password)
    if (!ismatch) {
        return res.json({success:false,message:"ivalied credentials"})

    }
    const token =createToken(user._id);
    res.json({success:true,token}

    )
} catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})
}
    
};

// const createToken = (id) => {
//     // Ensure that JWT_SECRET is defined
//     // if (!process.env.JWT_SECRET) {
//     //     throw new Error("JWT_SECRET is not defined");
//     // }
//     return jwt.sign({id}, process.env.JWT_SECRET); // Token expires in 1 hour
// };
const createToken = (id) => {
    const secret = process.env.JWT_SECRET || 'fallback-secret';
    return jwt.sign({id}, secret);
};

const registeruser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exists = await usermodel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);
        const newuser = new usermodel({
            name: name,
            email: email,
            password: hashpassword
        });
        
        const user = await newuser.save();
        
        // Create a token
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "An error occurred" });
    }
};

export { registeruser, loginuser };
                