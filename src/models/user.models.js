import { createHmac, randomBytes } from "crypto"
import mongoose from "mongoose";
const Schema = mongoose.Schema


const userSchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        require: true,
    },
    profileImageUrl: {
        type: String,
        default: '/images/default.png'
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: "USER"
    }
}, { timestamps: true })

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified('password')) return;
    const salt = randomBytes(14).toString();
    const hashedPassword = createHmac('sha256', salt)
        .update(user.password)
        .digest('hex');
    this.salt = salt
    this.password = hashedPassword
    next()
})

export default mongoose.model('User', userSchema)