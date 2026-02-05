import mongoose from "mongoose";
import dotenv from "dotenv"

const connectDB = async () => {
 
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    // Vercel par process.exit(1) mat lagao, sirf error throw karo
    throw err;
  }
};

export default connectDB;