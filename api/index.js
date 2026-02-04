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

// DB connect
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// API routes
app.use("/api", registerRouter);

// ❗ VERY IMPORTANT
export default serverless(app);
