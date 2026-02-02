import { Timestamp } from "mongodb"
import mongoose from "mongoose"

const registerSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{Timestamp:true})

export const registerModules = mongoose.model("register",registerSchema)