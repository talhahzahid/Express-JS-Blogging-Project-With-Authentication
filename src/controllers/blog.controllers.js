
import mongoose from "mongoose";
import blog from "../models/blog.models.js";





const addBlog = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const { title, body } = req.body;
    const hello = await blog.create({
        title,
        body,
        createdBy: req.user_id,
        coverImageURl: `uploads/${req.file.filename}`
    })
    console.log(hello);

    res.redirect('/')
}


export { addBlog }