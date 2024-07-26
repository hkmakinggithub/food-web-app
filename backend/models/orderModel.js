import mongoose from "mongoose";


const ordershema  =new mongoose.Schema({
userId:{type:String,require:true},
items:{type:Array,require:true},
amout:{type:Number,require:true},
address:{type:Object,require:true},
status:{type:String,default:"food processing"},
data:{type:Date,default:Date.now()},
payment:{type:Boolean,default:false}


})
const orderModel=mongoose.model.order || mongoose.model("order",ordershema);
export default orderModel;

