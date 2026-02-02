import {register} from "../controller/registerController.js"
import { Router } from "express"

const registerRouter = Router()

registerRouter.post("/register",register)

export default registerRouter 