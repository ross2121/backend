import { asynchanlder } from "../utils/asynchandler.js";
import {apierror} from "../utils/apierror.js";
 const registeruser=asynchanlder((req,res)=>{
  
     res.status(200).json({
         message:"ok"  
 })
})
/*const registeruser = asynchanlder((req,res)=>{
   
    res.status(200).json({message:"ok"});
})*/




// first you have to login
//then the middleware conncected
//mongodb will connect to the server 
//server will response the output

export {
    registeruser,
}