import mongoose from "mongoose";
const Schema = mongoose.Schema


const userSchema = new Schema({
    fullname: {
        type: String,
        require: true
    }
})