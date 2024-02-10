import { Error } from "mongoose";

class  apierror extends Error{
    constructor(
statuscode,
message="something went wrong",
errors=[],
stack=""
    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.message=message
        this.sucess=false;
        this.errors=errors

        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
    
}
export{apierror}
