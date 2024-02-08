import mongoose from "mongoose"
import { DB_name } from "../constan.js"
const connectDB=async()=>{
    try {
        const connectresponse=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`)
        console.log(`\n MONGODB connected !! DB HOST:${connectresponse.connection.host}`);
        console.log(`server is running at ${process.env.PORT}`);
    } catch (error) {
        console.log("mongodb connection error",error);
        process.exit(1)
    }

}
export default connectDB