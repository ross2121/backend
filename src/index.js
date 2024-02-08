//require('dotenv').config({path:  './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import  Express  from "express"
const app=Express();
dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000),()=>{
        console.log(`server is running at ${process.env.PORT}`)
        
    }
})
.catch((err)=>{
    console.log("mongo db failed to connect",err)
})
















/*import express from "express"
const app=express()
(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}`)
       app.on("error",(error)=>{
console.log("ERRR:",error);
throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
       })
    }catch(error){
console.log("error",error)
throw err
    }
})()*/