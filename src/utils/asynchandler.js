//const asynchanlder=()=>{}; 


/*const  asynchanlder=(fn)=>async (req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code||500).json({
            sucess:false,
            message:error.message

        })
    }
}*/


const asynchanlder=(requeshandler)=>{(req,res,next)=>{
    Promise.resolve(requeshandler(req,res,next)).
    catch((err)=>next(err))
}
}
export {asynchandler}