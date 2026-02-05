import { registerModules } from "../moduls/registerModules.js"; // Folder name check karein 'moduls' ya 'models'?
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try { 
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ // 400 better hai validation ke liye
                message: "Please enter username and password",
                error: true,
                success: false
            });
        }

        // Email field check karein (Aapne schema mein email rakha hai)
        const user = await registerModules.findOne({ email: username });
        if (user) {
            return res.status(400).json({
                message: "User already exists",
                error: true,
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await registerModules.create({
            email: username, 
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User created Successfully",
            error: false,
            success: true
        });
    } catch (err) {
        console.error("Register Error:", err);
        return res.status(500).json({
            message: err.message,
            success: false,
            error: true
        });
    }
};