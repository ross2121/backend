import {v2 as cloudinary} from 'cloudinary';
import { Console } from 'console';
import  fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});
const uploadcloudnary=async(localfilepath)=>{
try {
    if(!localfilepath) return null
    const response=await cloudinary.uploader.upload(localfilepath,{
        resource_type:"auto"
    })
    Console.log("file is uploaded on cloudnary",response.url);
return response;
    
} catch (error) {
    fs.unlinkSync(localfilepath)//removed the locally saved temporary file as the upload operation failed
return null;
}
}
export{uploadcloudnary}



cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });