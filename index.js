import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "../db/db.js";              // ✅ FIX
import registerRouter from "../Router/registerRouter.js"; // ✅ FIX

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.get("/api", (req, res) => {
  res.send("Backend running 🚀");
});

app.use("/api/user", registerRouter);

export default app;