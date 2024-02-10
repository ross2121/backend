import { Router  } from "express";
import {registeruser} from "../controllers/user.controller.js";
//import {upload} from "../middlewares/multer.middleware.js"

const router=Router()

    router.route("/register").post(registeruser) 
//router.post('/register',registeruser);



export default router