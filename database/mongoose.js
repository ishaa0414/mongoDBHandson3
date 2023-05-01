const mongoose=require("mongoose")

const url="mongodb://127.0.0.1:27017/student";

const connect=async()=>{
    try {
        console.log("Trying to connect to database")
        await mongoose.connect(url);
        console.log("connected to database")
    } catch (error) {
       console.log("error in connecting",error.message) 
    }
}
module.exports=connect; 