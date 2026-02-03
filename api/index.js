import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import serverless from "serverless-http";
import { connectDB } from "../db/db.js";
import registerRouter from "../Router/registerRouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Database connect
connectDB();

app.get("/api", (req, res) => {
  res.send("Backend running 🚀");
});

app.use("/api/user", registerRouter);

// Local testing ke liye (Vercel par ye ignore ho jayega)
const PORT = process.env.PORT || 8080;
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}/api`);
    });
}

export default serverless(app);