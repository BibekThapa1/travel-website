import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
  });
  
import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log("Cloudinary variable: index", process.env.CLOUD_NAME, process.env.CLOUD_API_KEY);


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`App listening at port: ${process.env.PORT}`)
    })
    
    app.on("error",()=>{
        console.log("Express Error: ",error)
    })    

    app.get("/api/v1/places",(req,res)=>{
        res.status(200)
        res.json({"name":"bibek"})
    })
})
.catch(error=>{
    console.log("MongoDB connection failed: ",error)
})









