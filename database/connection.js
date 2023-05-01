const { MongoClient } = require("mongodb");

const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
const insertToDb=async (data)=>{
    
    try{
        await client.connect();
        const database=client.db("student")
        const collection=database.collection("studentInfo");
        const dbResponse=await collection.insertMany(data);
        await client.close();
        return dbResponse;
    }catch(error){
      console.log("Error occured while performing db operation",error.message) ;
      return error.message;
    }

}
const findInDb=async (query)=>{
    
    try{
        await client.connect();
        const database=client.db("student")
        const collection=database.collection("studentInfo");
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }catch(error){
      console.log("Error occured while performing db operation",error.message) ;
      return error.message;
    }

}

const updateToDb=async (filter,updateValue)=>{
    
    try{
        await client.connect();
        const database=client.db("student")
        const collection=database.collection("studentInfo");
        const dbResponse=await collection.updateOne(filter,updateValue).toArray();
        await client.close();
        return dbResponse;
    }catch(error){
      console.log("Error occured while performing db operation",error.message) ;
      return error.message;
    }

}
module.exports={
    insertToDb,
    findInDb,
    updateToDb
}