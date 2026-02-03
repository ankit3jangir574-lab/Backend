import mongoose from "mongoose";
import dotenv from "dotenv";

// ✅ Load env ONLY for local
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    if (!process.env.MONGO_URL) {
      throw new Error("❌ MONGO_URL is not defined");
    }

    cached.promise = mongoose.connect(process.env.MONGO_URL);
  }

  cached.conn = await cached.promise;
  console.log("MongoDB connected");
  return cached.conn;
};
