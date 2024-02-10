
import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
const userschema=new Schema(
    {
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true,

},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
   
},
fullname:{
    type:String,
    required:true,
    trim:true,
    index:true,
   },
   username:{
    type:String, //cloudinary url
    required:true,
    
},
coverimage:{
    type:String
},  
watchhistory:[{
 type:Schema.type.objectid,
 ref:"video",
}],
password:{
    type:String,
    reqired:[true,'password is required']
},
refreshtoken:{
    type:String
}


},{timestamps:true})
userschema.pre("save",async function (next){
    if(!this.ismodified("password")) return next()
    this.password= await bcrypt.hash(this.password,10)
   
    next()
    }
)
videoschema.plugin(mongooseAggregatePaginate)

userschema.methods.ispasswordcorrect=async function(password){
    return bcrypt.compare(password,this.password)
}
userschema.methods.generateaccesstoken=function(){
    return Jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresin:process.env.ACCESS_TOKEN_EXPIRY
    }
    )}
    
    export const user=mongoose.model("user",userschema)