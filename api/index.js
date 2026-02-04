import express from "express";
import cors from "cors";
import morgan from "morgan";
import serverless from "serverless-http";
import { connectDB } from "../db/db.js";
import registerRouter from "../Router/registerRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

await connectDB();

app.get("/api", (req, res) => {
  res.send("Backend running 🚀");
});

app.use("/api/user", registerRouter);

export default serverless(app);
