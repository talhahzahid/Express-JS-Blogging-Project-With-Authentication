import express from "express"
import { registerUser, loginUser, logoutUser } from "../controllers/user.controllers.js"


const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('signup')
})
router.get('/signin', (req, res) => {
    res.render('signin')
})

router.post('/signup', registerUser)
router.post('/signin', loginUser)
router.get('/logout', logoutUser)

export default router































































// router.post('/signup', async (req, res) => {
//     const { fullName, email, password } = req.body;  // Destructure the incoming data
//     console.log(req.body);  // Debugging log to see what's in the body

//     if (!fullName || !email || !password) {
//         return res.status(400).json({ message: 'All fields are required' });
//     }
//     await User.create({
//         fullName,
//         email,
//         password
//     });
//     return res.redirect('/')
// })