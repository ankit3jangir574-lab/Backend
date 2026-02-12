import express from "express";
import connectDB from "./db.js";

const app = express();

app.get("/", async (req, res) => {
  await connectDB();
  res.send("Backend + MongoDB working 🚀");
});

export default app;