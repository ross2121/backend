import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videschema=new Schema({
    videofile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0,

    },
    ispublished:{
        type:Boolean,
        defautl:true,

    },
    owner:{
        type:Schema.type.objectid,
        ref:"user",

    },



    
},{timestamps:true})
videschema.plugin(mongooseAggregatePaginate)
export const video=mongoose.model("video",videoschema)