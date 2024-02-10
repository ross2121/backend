import cookieParser from "cookie-parser";
import  Express  from "express";
import cors from "cors";
import { registeruser } from "./controllers/user.controller.js";
import userrouter from "./routes/user.routes.js"
const app=Express()


app.use(cors({
origin:process.env.CORS_ORIGIN,
Credential:true
}))

app.use(Express.json({limit:"16kb"}))
app.use(Express.urlencoded({extended:true,limit:"16kb"}))
app.use(Express.static("public"))
app.use(cookieParser())




app.use("/api/v1/user",userrouter)
//http://localhost:8000/api/v1/users/register
// app.get('/api/v1/user/register',registeruser)


export{app}