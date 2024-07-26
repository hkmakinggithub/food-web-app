import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: { type: String, requrired: true },
    email: { type: String, requrired: true, unique: true },
    password: { type: String, requrired: true },
    cartdate: { type: Object, default: {} }
}, { minimize: false })
const usermodel = mongoose.models.user || mongoose.model("user", userSchema);
export default usermodel;


