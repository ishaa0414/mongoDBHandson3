const express=require("express");
const bodyParser=require("body-parser")
const studentRouter=require("./routes/student")
const connect=require("./database/mongoose");
const app=express();
app.use(bodyParser.json());
app.use(studentRouter); 
app.get('/',function(req,res){
return res.send({message:"hello from node app"})
})

app.listen(5655,async()=>{
    console.log("server is running ");
   await connect()
})