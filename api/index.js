import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "../db/db.js";
import registerRouter from "../Router/registerRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running on Vercel 🚀");
});

app.use("/api/user", registerRouter);


export default app;
