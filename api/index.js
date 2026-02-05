import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";
import connectDB from "../db/db.js";
import registerRouter from "../Router/registerRouter.js";

dotenv.config();
const app = express();

app.use(cors()); // Global cors allow karein testing ke liye, ya specific URL
app.use(express.json());


await connectDB();
    

app.get("/", (req, res) => {
    res.json({ message: "Backend is live on Vercel 🚀" });
});

app.use("/api", registerRouter);

export default serverless(app);