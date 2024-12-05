import jwt from "jsonwebtoken"
const secret = "$asdfghjkl"


// generate token from user
function createTokenFromUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        role: user.role
    }
    const token = jwt.sign(payload, secret)
    return token
}

// check token from user 
function validateToken(token) {
    const payload = jwt.verify(token, secret)
    return payload
}

export { createTokenFromUser, validateToken }

