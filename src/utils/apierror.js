class  apierror extends error{
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
        this.errors=this.errors

        if(stack){
            this.stack=stack
        }
        else{
            error.capturestacktrace(this,this.constructor)
        }
    }
    
}
export{apierror}
