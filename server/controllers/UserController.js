import { User } from "../models/UserModel.js";
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(404).json({
                success: false,
                message: "All fields are required."
            });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(404).json({
                success: false,
                message: "User already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            success: true,
            message: "Account created successfully."
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Registration Failed."
        });
    }
}


export const login = async (req, res) => {

    try {
        
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({
                success: false,
                message: "All fields are required."
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found."
            });
        }

        const passwordMatched = await bcrypt.compare(password,user.password);
        if (!passwordMatched) {
            return res.status(404).json({
                success: false,
                message: "Password not matched."
            });
        }

        generateToken(res, user, `Welcome back ${user.name}`);

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Login Failed."
        });
    }

}