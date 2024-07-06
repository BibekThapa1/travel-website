import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB(){

    console.log(`${process.env.MONGODB_URL}/${DB_NAME}`);

    let url = "mongodb+srv://BibekThapa:bibek321@cluster0.d3of7pg.mongodb.net"

    try {
     const connectionInstance =  await mongoose.connect(`${url}/${DB_NAME}`);
 
         

    } catch (error) {
        console.log("MongoDB error: ",error)
    }
}

connectDB()