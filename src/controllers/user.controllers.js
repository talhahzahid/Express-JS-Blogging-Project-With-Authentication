import mongoose from "mongoose";
import User from '../models/user.models.js'


const registerUser = async (req, res) => {
    console.log('hey');
    const { fullName, email, password } = req.body
    console.log(req.body);
    await User.create({
        fullName,
        email,
        password
    });
    return res.redirect('/')
}

export { registerUser }
