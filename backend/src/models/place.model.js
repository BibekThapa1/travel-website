import mongoose ,{Schema} from "mongoose";

const placeSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    cardImg:{
        type:String, // Cloudinary Url
        required:true,
    },
    shortInfo:{
        type:String,
        required:true,
    },
    images:[    //  Cloudinary Urls
        {
        type:String,
        required:true,
        }
    ],
    description:{
        type:String,
        required:true,
    },
    mapDescription:{
        type:String,
        required:true,
    },
    mapTag:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const Place = mongoose.model("Place",placeSchema)
