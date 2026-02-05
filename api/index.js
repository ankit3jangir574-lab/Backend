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

// ✅ test route
app.get("/", async (req, res) => {
  try {
    await connectDB();
    res.json({ message: "Backend live 🚀 DB connected" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB connection failed" });
  }
});

// routes
app.use("/api", registerRouter);

// ❗ important
export default serverless(app);
