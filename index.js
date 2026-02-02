import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import {connectDB} from "../backend/db/db.js"
import registerRouter from "../backend/Router/registerRouter.js"

dotenv.config();
const app = express()
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 8080
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

connectDB()

app.use("/api/user",registerRouter)



app.listen(port , ()=>{
    console.log("server is runing on ",port)
})