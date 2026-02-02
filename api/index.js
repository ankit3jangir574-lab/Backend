import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./db/db.js";
import registerRouter from "./Router/registerRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.use("/api/user", registerRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
