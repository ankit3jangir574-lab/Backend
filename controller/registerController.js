import { registerModules } from "../moduls/registerModules.js"
import bcrypt from "bcryptjs"



export const register = async (req, res) => {

    try {
        const { username, password } = req.body
        console.log(req.body)
        if (!username || !password) {
            return res.status(500).json({
                message: "please enter username and password",
                error: true,
                sucess: false
            })
        }
        const user = await registerModules.findOne({email: username })
        if (user) {
            return res.status(400).json({
                message: "user alredy exit",
                error: true,
                success: false

            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const saveuser = await registerModules.create({

            email: username, password: hashedPassword
        })
        return res.status(201).json({
            message: "user created Successfully",
            error: false,
            success: true
            
        })
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
            error: true
        })
    }
}

