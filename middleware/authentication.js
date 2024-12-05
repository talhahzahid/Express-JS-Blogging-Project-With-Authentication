import { validateToken } from "../service/authentication.js"

function checkAuthenticationFromUser(cookieName) {
    return (req, res, next) => {
        const cookieTokenValue = req.cookies[cookieName];
        if (!cookieTokenValue) {
            next()
        }
        try {
            const userPayload = validateToken(cookieTokenValue)
            req.user = userPayload;
        } catch (error) { }
        next()
    }
}

export { checkAuthenticationFromUser }