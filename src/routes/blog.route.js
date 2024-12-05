import express from "express"
// import { registerUser, loginUser, logoutUser } from "../controllers/user.controllers.js"


const router = express.Router()
import { addBlog } from "../controllers/blog.controllers.js"

router.get('/addblog', (req, res) => {
    res.render('addblog' , {
        user : req.user
    })
})
// router.get('/signin', (req, res) => {
//     res.render('signin')
// })

router.post('/addblog', addBlog)
// router.post('/signin', loginUser)
// router.get('/logout', logoutUser)

export default router























































