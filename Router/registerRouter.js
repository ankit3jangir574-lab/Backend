import { Router } from "express";
import { register } from "../controller/registerController.js";

const registerRouter = Router();

registerRouter.post("/register", register);

export default registerRouter;