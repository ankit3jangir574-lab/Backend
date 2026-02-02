import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()




 export const connectDB =async()=>{
    
  try{
   await mongoose.connect(process.env.MONGO_URL)
    console.log("db connected")
   
  }
  catch(err)
  { 
    return res.status(500).json({
            message: err.message,
            success: false,
            error: true
        })}
  }
                                   