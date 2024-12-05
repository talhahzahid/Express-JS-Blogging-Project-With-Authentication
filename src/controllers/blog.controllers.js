
import mongoose from "mongoose";




const addBlog = (req, res) => {
    console.log(req.body);
    res.redirect('/')
}


export { addBlog }