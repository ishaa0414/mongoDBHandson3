const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    contact:String,
    courses:Array,
    cgpa:Number
});

const Student=mongoose.model("data",studentSchema);
module.exports={Student};