import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";
import connectDB from "../db/db.js";
import registerRouter from "../routes/registerRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ⚠️ IMPORTANT: DB connect inside handler-safe way
let isConnected = false;
async function dbConnectOnce() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
    console.log("MongoDB connected");
  }
}
app.use(async (req, res, next) => {
  await dbConnectOnce();
  next();
});

// test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API working 🚀" });
});

// routes
app.use("/api", registerRouter);

export default serverless(app);
