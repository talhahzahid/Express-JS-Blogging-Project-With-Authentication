
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
    return res.redirect('/user/signin')
}

// login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log('Email:', email);
    try {
        const user = await User.matchPasswordAndGenerateToken(email, password);
        console.log('User', user);
        res.cookie("token", user)
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/user/signin')
    }
};

// logout user
const logoutUser = (req, res) => {
    res.clearCookie("token")
    return res.redirect('/user/signin');
}



export { registerUser, loginUser, logoutUser }
