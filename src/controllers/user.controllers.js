
import mongoose from "mongoose";
import User from '../models/user.models.js'

// register
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

// login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log('Email:', email);
    try {
        const user = await User.matchPassword(email, password);
        console.log('User:', user);
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/user/signin')
    }
};



export { registerUser, loginUser }
