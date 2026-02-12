import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../db/db.js";
import registerRouter from "../Router/registerRouter.js";

dotenv.config();
const app = express();
 
 const port = 8080;

app.use(cors());
app.use(express.json());


await connectDB();
    

app.get("/", (req, res) => {
    res.send({ message: "Backend is live on Vercel 🚀" });
});

app.use("/api", registerRouter);

export default app;