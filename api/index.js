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

// DB connect (sirf once)
await connectDB();

// health check
app.get("/", (req, res) => {
  res.json({ message: "Backend running 🚀" });
});

// routes
app.use("/api", registerRouter);

// ❗ THIS IS MUST
export default serverless(app);
